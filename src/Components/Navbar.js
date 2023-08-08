import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4">
      <div className="">
        <h1 className="font-bold text-3xl text-gray-700">Dental Clinic</h1>
      </div>
      <div>
        <ul className=" hidden md:flex p-4 font-bold text-gray-700 text-center">
          <li className="p-4">
            {" "}
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>{" "}
          </li>
          <li className="p-4">
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About us
            </Link>
          </li>
          <li className="p-4">
            <Link to="contact" smooth={true} duration={500}>
              Contact us
            </Link>{" "}
          </li>
          <li className="p-4 border rounded-full bg-red-600 text-white h-[40px] text-sm align-middle text-center py-4">
            <Link to="form" smooth={true} duration={500}>
              Visit us
            </Link>
          </li>
        </ul>

        <div className="md:hidden z-10" onClick={handleNav}>
          {!nav ? <BiMenu size={30} /> : <ImCancelCircle size={30} />}
        </div>

        <ul
         
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-center text-gray-300 left-0  w-full h-full bg-black flex flex-col "
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <li className="p-4"  onClick={handleNav}>
            {" "}
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>{" "}
          </li>
          <li className="p-4"  onClick={handleNav}>
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About us
            </Link>
          </li>
          <li className="p-4"  onClick={handleNav}>
            <Link to="contact" smooth={true} duration={500}>
              Contact us
            </Link>{" "}
          </li>
          <li  onClick={handleNav} className="p-4 border rounded-full bg-red-600 text-white h-[40px] text-sm align-middle text-center py-4">
            <Link to="form" smooth={true} duration={500}>
              Visit us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
