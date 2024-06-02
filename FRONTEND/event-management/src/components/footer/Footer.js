import React from 'react'
import { GiCutDiamond } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='h-full flex'>
        <div className='bg-indigo-600 w-full divide-y text-white'>
            <div className='xl:w-full xl:h-full xl:flex xl:items-center p-2'>
                <div className='xl:w-full xl:pl-5 font-bold md:text-md xl:text-lg my-1'>
                    <h1 className='text-center font-bold text-xl h-13'>DAIICT</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer