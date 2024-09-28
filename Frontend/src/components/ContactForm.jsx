import React from 'react'

const ContactForm = () => {
    return (
        <div className=' my-16 md:my-28 container flex flex-col md:flex-row max-w-screen-2xl mx-auto md:px-20 px-4'>
            <h1 className='text-4xl md:text-6xl p-4 m-2 font-bold text-pink-500'>Hello....Contact us.</h1>
            <p className='text-xl p-2 m-2 pb-8'>I’d love to hear from you! Whether you have a question, collaboration idea, or just want to connect, feel free to reach out. I'm always open to discussing new opportunities, exciting projects, or how I can help you achieve your goals. Let’s create something amazing together! Fill out the form below, or send me a message directly at <span className='font-bold text-2xl text-pink-500'>[gufraanquraishi@gmail.com]</span>. I'll do my best to respond as soon as possible.

                Looking forward to connecting with you!</p>
        </div>
    )
}

export default ContactForm