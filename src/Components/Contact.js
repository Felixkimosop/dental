import React from 'react'

function Contact() {
  return (
    <div id='contact' className='max-w-[1140px] mx-auto p-4'>
        <h1 className='text-xl text-center'>Contact Us</h1>
        <div className='md:flex w-full h-full justify-between'>
            <form className='flex flex-col w-full items-center justify-center p-4 '>
                <label>Name</label>
                <input className='border rounded-md bg-gray-200 p-2 m-2' type="text" placeholder='name' />
                <label>Email</label>
                <input className='border rounded-md bg-gray-200 p-2 m-2' type="email" placeholder='email' />
                <label>Message</label>
                <textarea className='border col-span-2 m-2 p-2 bg-gray-200 '  placeholder='message'></textarea>
                <button className="bg-red-600 text-white font-bold rounded-md w-[100px] mt-4">Send</button>

            </form>
            <img className='w-full h-[70vh] p-4 rounded-md' src='./dentist-1530917_1280.jpg' alt='/'/>
        </div>
    </div>
  )
}

export default Contact