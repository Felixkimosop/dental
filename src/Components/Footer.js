import React from 'react'

function Footer() {
  return (
    <div className='max-w-[1140px] mx-auto '>
        <div className='md:grid grid-cols-3 justify-between p-4 text-center'>
            <div className=''>
                <h1 className='text-3xl font-bold text-center '>Dental Clinic</h1>
            </div>
            <div className='text-center'>
                <h2 className='text-xl underline font-bold'>Dental Services</h2>
                <ul className='text-md '>
                    <li>Orthodontics</li>
                    <li>Cleaning</li>
                    <li>Crowning</li>
                    <li>Removal</li>
                </ul>
            </div>

            <div>
                <h2 className='text-xl underline font-bold'>Contacts</h2>
                <ul className='text-md'>
                    <li>FaceBook</li>
                    <li>Instagram</li>
                    <li>Twitter </li>
                    <li>LinkeIn</li>
                </ul>
            </div>
        </div>
        <div className='border-t-4'>
        <p className='text-center p-4 text-xl'>© Copyrights Dental Clinic</p>

        </div>

    </div>
  )
}

export default Footer