"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className='h-screen  bg-[#254f1a] relative '>
          {/* Navbar */}
      <div className='bg-white z-10 md:w-[80vw] w-[95vw] mx-auto py-2.5 rounded-full sticky top-13 md:px-10 px-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-10'>
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-8'>
          <Link href="/">Home</Link>
          <Link href="/form">Form</Link>
          <Link href="/form">List</Link>
        </ul>

        {/* Desktop Buttons */}
        <div className='hidden md:flex items-center justify-center gap-2'>
          <Link href="/form" className='md:p-6 p-1 sm:text-sm bg-gray-200 rounded-l px-7 font-bold text-black'>
            Log in
          </Link>
          <Link href="/form" className='md:p-6 p-1 sm:text-sm bg-black rounded-full px-7 font-bold text-white'>
            Sign up free
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu}>
            {  <HiMenu className='w-6 h-6 dark:text-black' />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className='flex justify-between items-center p-4 border-b'>
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
              alt="Logo"
            />
          </Link>
          <button onClick={toggleMenu}>
            <HiX className='w-6 h-6' />
          </button>
        </div>

        <ul className='flex flex-col gap-6 p-6 dark:text-black'>
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/form" onClick={toggleMenu}>Form</Link>
          <Link href="/form" onClick={toggleMenu}>List</Link>
          <Link href="/form" onClick={toggleMenu} className='bg-gray-200 rounded-l px-4 py-2 font-bold text-black text-center'>
            Log in
          </Link>
          <Link href="/form" onClick={toggleMenu} className='bg-black text-white rounded-full px-4 py-2 font-bold text-center'>
            Sign up free
          </Link>
        </ul>
      </div>


    </div>
  )
}

export default Navbar