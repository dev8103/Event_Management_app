import React from 'react'
import { GiCutDiamond } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='h-80 flex'>
        <div className='bg-slate-200 w-full divide-y divide-neutral-300'>
            <div className='xl:w-full xl:h-1/5 xl:flex xl:items-center p-2'>
                <div className='xl:w-1/2 xl:pl-5 font-bold md:text-md xl:text-lg my-1'>
                    <h1>Get connected with us on social networks</h1>
                </div>
                <div className='xl:w-1/2 flex xl:justify-end gap-4 text-2xl pr-5 my-1'>
                    <a href="https://www.youtube.com/@fenilvaghasiya1860"><FaYoutube/></a>
                    <a href="https://www.instagram.com/_fenil.123"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/fenil-vaghasiya-b47063230"><FaLinkedin/></a>
                    <a href="https://github.com/fenil-vaghasiya"><IoLogoGithub/></a>
                </div>
            </div>
            <div className='xl:h-3/5 xl:flex mx-auto xl:pl-72 items-center'>
                <div className='xl:w-1/2 flex flex-col m-2'>
                    <div className='flex gap-2 items-center mb-2'>
                        <GiCutDiamond />
                        <h1 className='font-bold pb-1 mt-1'>DAIICT</h1> 
                    </div>
                    <p className='xl:w-96'> 
                    Dhirubhai Ambani Institute of Information and Communication Technology, is a private self-financed university/institute located in Gandhinagar, Gujarat, India. It is named after the Gujarati entrepreneur and Reliance Group founder Dhirubhai Ambani.
                    </p>
                </div>
                <div className='w-1/2 flex flex-col m-2'>
                    <h1 className='font-bold pb-3'>CONTACT</h1>
                    <div className='flex gap-2 items-center mb-2'>
                        <AiFillHome />
                        <h1>GANDHINAGAR,INDIA</h1>
                    </div>
                    <div className='flex gap-2 items-center mb-2'>
                        <IoMdMail />
                        <p>daiict@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='h-1/5 flex justify-center items-center backdrop-opacity-10 backdrop-invert bg-sky-100/50'>
                <a href="/" className='underline underline-offset-1 text-xl font-bold'>DAIICT</a>
            </div>
        </div>
    </div>
  )
}

export default Footer