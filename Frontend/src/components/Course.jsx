import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import list from '../../public/list.json'
import Card from './Card.jsx'

const Course = () => {
    console.log(list);
    return (
        <>
            <Navbar />
            <div className='min-h-screen-2xl mt-36 container shadow-md bg-base-100 mx-auto md:px-20 px-4'>
                <div className='items-center justify-center text-center'>
                    <h1 className=' text-2xl md:text-4xl'>
                        We are delighted to have you <span className='font-bold text-pink-500'>Here!:)</span>
                    </h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id consectetur alias ab qui. Facilis tempore, quam repellat exercitationem quibusdam quia fugiat odio deleniti eligendi tempora fuga! Natus, asperiores corporis?</p>
                    <div class="mt-6 flex justify-center items-center ">
                        <button class="mb-3 bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
                            Back
                        </button>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
                        {
                            list.map((item) => <Card key={item.id} item={item} />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Course