import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../public/images/Logo.png';
import SecondNavbar from '../components/SecondNavbar';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  } 

  return (
    <div className="bg-white w-full">
      <div className="">
        <div className="max-w-screen-xl m-auto flex justify-between items-center p-3 text-black">
          <div className="flex">
            <div className="logo-container flex items-center pr-6">
              <Link href='/'>
                <Image
                  src={logo}
                  alt="logo"
                  width={160}
                />
              </Link>
            </div>
            <SecondNavbar />
          </div>
          <div className="">
            <div className="flex justify-end fs-xsm hidden md:block">call our free helpline today on:</div>
            <div className="btn-primary-tr fs-xl hidden md:block">0800 141 3912</div>
          </div>
          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
          {/* Mobile Menu */}
          <div className={
              nav 
              ? 
              'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen ease-in duration-300 bg-white' 
              : 
              'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen ease-in duration-300 bg-white'
            }>
            <ul className="flex-col">
              <li className="p-4 text-3xl hover:text-gray-500">
                <Link href='/services'>Services</Link>
              </li>
              <li className="p-4 text-3xl hover:text-gray-500">
                <Link href='/events'>Events</Link>
              </li>
              <li className="p-4 text-3xl hover:text-gray-500">
                <Link href='/pricing'>Pricing</Link>
              </li>
              <li className="p-4 text-3xl hover:text-gray-500">
                <Link href='/resources'>Resources</Link>
              </li>
              <li className="p-4 text-3xl hover:text-gray-500">
                <Link href='/about'>About</Link>
              </li>
              <li className="p-4 text-3xl hover:text-gray-500">
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;