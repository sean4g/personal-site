import React from 'react';

function Contact() {
    return (
        
        <div className="flex flex-col w-9/12 mb-10 mx-auto font-Lora">
            <div className='flex flex-col justify-start mb-4'>
                <h1 className="text-4xl">Contact Me</h1>
            </div>
            <div className='flex justify-start mb-4'>
                <p className="text-md">or send me a direct email at </p> 
                <p className='font-semibold'>&nbsp;sean.x2.wang@gmail.com</p>
            </div>
            <div className='flex justify-start items-start'>
                <form 
                    action="https://getform.io/f/5b1d35b2-152a-4787-88a0-6aa205af2db4"
                    method="POST"
                    className='flex flex-col w-fill md:w-7/12'>
                        <input
                            type="text"
                            name="name"
                            placeholder='name'
                            className="p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder='email'
                            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" 
                        />
                        <textarea
                            name="message"
                            placeholder='message'
                            rows="10"
                            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <button 
                            type="submit"
                            className="text-center inline-block px-8 py-3 w-max text-base 
                                font-medium rounded-md text-white bg-blue-500 drop-shadow-md hover:bg-blue-600">
                            Contact Me
                        </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;