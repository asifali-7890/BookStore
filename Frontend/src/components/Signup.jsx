import React, { useState } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);
    
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="modal-box bg-white p-8 rounded-md shadow-md w-full max-w-sm">

                <div className='flex space-x-48 '>
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                    <Link to='/'>
                        <button className="bg-pink-300 hover:scale-150  p-2 btn btn-sm btn-circle btn-ghost  right-2 top-2">✕</button>
                    </Link>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name:</label>

                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your name"
                            {...register("name", { required: true })}
                        />
                        {errors.email && <span className='text-red-700'>This field is required</span>}
                    </div>

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
                        {errors.email && <span className='text-red-700'>This field is required</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="text-blue-500 hover:underline">Login now</button>
                    <Login />
                </p>
            </div>
        </div>
    );
};

export default Signup;
