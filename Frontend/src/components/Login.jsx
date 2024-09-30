import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
    };


    const LoginForm = () => {
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()

        const onSubmit = async (data) => {
            const userInfo = {
                email: data.email,
                password: data.password
            }

            await axios.post('http://localhost:4001/user/login', userInfo)
                .then((response) => {
                    console.log(response.data);
                    if (response.data) {
                        toast.success('Login successfully...');
                        document.getElementById('my_modal_3').close();
                        setTimeout(() => {
                            window.location.reload();
                            localStorage.setItem('Users', JSON.stringify(response.data.user));
                        }, 1000);
                    }
                }).catch((err) => {
                    {
                        if (err.response) {
                            console.log(err.response.data.message);
                            toast.error('Error: ' + err.response.data.message);
                            setTimeout(() => {
                                
                            }, 1000);
                        }
                    }
                });
        }

        return (
            <div className="flex justify-center items-center  bg-gray-100 py-6 ">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email:</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-700'>This field is required</span>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password:</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className='text-red-700'>This field is required</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>

                    <div className="m-3">
                        {isSignUpPage ?
                            <a href='/signup'>
                                Not Registered?
                                <span className='ml-2 text-md p-2 cursor-pointer rounded-md mt-2'>
                                    Signup
                                </span>
                            </a>

                            :

                            <Link to='/signup'>
                                Not Registered?<span className=' ml-2 text-md p-2 cursor-pointer rounded-md mt-2'>Signup</span>
                            </Link>}
                    </div>
                </form>
            </div>
        )
    };

    const location = useLocation();
    const isSignUpPage = location.pathname.includes('signup');

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {!isSignUpPage ? <a href='/'>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </a> :
                        <Link to='/'><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
                    }
                </form>
                <div className='mx-6'>
                    <LoginForm />
                </div>
            </div>
        </dialog>
    )
}

export default Login;