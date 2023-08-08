import React,{useState} from 'react'
import { BiMenu } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";



function Navbar() {
    const [nav, setNav] = useState(false)

    function handleNav(){
        setNav(!nav)
    }
  return (
    <div className='w-full h-[80px] flex justify-between items-center px-4'>
        <div className=''>
            <h1 className='font-bold text-3xl text-gray-700'>Dental Clinic</h1>
            </div>
            <div>
            <ul className=' hidden md:flex p-4 font-bold text-gray-700 text-center'>
                <li className='p-4'>Sevices</li>
                <li className='p-4'>About Us</li>
                <li className='p-4'>Contact Us</li>
                <li className='p-4 border rounded-full bg-red-600 text-white h-[40px] text-sm align-middle text-center py-4'>Visit Us</li>
            </ul>

            <div className='md:hidden' onClick={handleNav}>

                {!nav ? <BiMenu size={30}  /> : <ImCancelCircle size={30}/>}
            </div>

            <ul onClick={handleNav}   className={
          !nav
            ? "hidden ease-in duration-500"
            : " md:hidden absolute top-0 left-0 w-full h-screen  bg-black/90 flex flex-col justify-center items-center ease-in duration-300 "
        }>
                <li className=' text-2xl text-white font-bold py-4 hover:border-b-2'>Sevices</li>
                <li className=' text-2xl text-white font-bold py-4 '>About Us</li>
                <li className='text-2xl text-white font-bold py-4 '>Contact Us</li>
                <li className=' text-2xl text-white font-bold py-4 '>Visit Us</li>
            </ul>



        </div>
    </div>
  )
}

export default Navbar