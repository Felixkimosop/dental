import React from 'react'

function Form() {
  return (
    <div id='form' className='max-w-[1140px] mx-auto p-4 text-center'>
        <h2 className='text-2xl p-4'>Book An Appointment</h2>
        <form className='md:flex md:justify-between w-full items-center'>
            
            <div className='md:flex w-full'>
            <div className='md:flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Full Name</label>
                <br></br>
                <input className='border rounded:md p-2' type='text ' placeholder='Full name' />
            </div>
            <div className='md:flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Reason</label>
                <br></br>

                <select className='md:w-full border rounded-md p-2'>
                    <option>Orthodontics</option>
                    <option>Cleaning</option>
                    <option>Removal</option>
                </select>
            </div>
            <div className='md:flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Date</label>
                <br></br>

                <input className='border rounded:md p-2' type="date" placeholder='Enter Date' />
            </div>
            <div className='md:flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Time</label>
                <br></br>

                <input className='border rounded:md p-2' type="time" placeholder='Enter Time' />
            </div>
            <div className='flex flex-col my-2 p-2 w-full'>
          <label>Book</label>
          <br></br>
          <button className=' bg-red-600 rounded-md p-2 w-full text-white'>Book Now</button>
        </div>
            </div>

        </form>
    </div>
  )
}

export default Form