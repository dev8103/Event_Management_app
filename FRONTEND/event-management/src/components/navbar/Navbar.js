import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { ImCross } from 'react-icons/im';
import { LuAlignJustify } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
  const toggleNavbar=()=>{
    setIsOpen(!isOpen);
  }
  const type = JSON.parse(localStorage?.getItem('type'));
  const user = JSON.parse(localStorage?.getItem('user'));

  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear('user');
    localStorage.clear('type');
    // toast.success("Succesfully Logged Out",{autoClose:3000});
    navigate('/login');
    // window.location.href = '/login';
  }
  return (
    <div>
      <div className='bg-indigo-600 text-2xl font-bold text-white shadow-xl sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-gray-800 p-8'>
          <div>
              Welcome To Daiict Events Page
          </div>
          <div className='hidden md:flex'>
            <ul className='flex gap-5 justify-between'>
              <li>
                {
                  (type == "sbg" || type == "cc" )? 
                  <a href="/createcommittee">Add Club/Committee</a>:
                  ""
                }
              </li>
              <li>
                {
                  type == "sbg"?
                  <a 
                    href="/collegecommittee"
                  >Club/Committee</a>
                  :
                  <a 
                    href={user?.email === "daiict@gmail.com" ? '/admineventlist' : '/allevents'}
                    // href="/allevents"
                  >Home</a>

                }
              </li>
              <li><a href='/signup'>Sign Up</a></li>
              <li><a href='/login'>Sign In</a></li>
              <li><a href="" onClick={()=>logout()}>Log Out</a></li>
              {/* <li>
                  {user ? "": <a href='/'>Sign Up</a>}
                  {user ? <a href="" onClick={logout}>Log out</a>: ""}
              </li> */}
              <li><a href="/profile" className='text-3xl'><FaRegUserCircle /></a></li>
            </ul>
          </div>
          <div className='md:hidden flex'>
            <button onClick={toggleNavbar}>
              {
                isOpen?<ImCross/>:<LuAlignJustify/>
              }
            </button>
          </div>
        </div>
        {
          isOpen && (
            <div className='flex justify-center p-2 items-center bg-indigo-600 text-white text-xl '>
              <ul className='flex flex-col justify-center items-center gap-1 w-full'>
                <li className='shadow-xl w-full text-center p-3'><a href="/allevents">Home</a></li>
                <li className='shadow-xl w-full text-center p-3'><a href="/signup">Sign Up</a>
                  {/* <li>{user ? "" : <a href='/'>Sign Up</a>}</li> */}
                  {/* <li>{user ? <a href="" onClick={logout}>Log out</a>: ""}</li> */}
                </li>
                <li className='shadow-xl w-full text-center p-3'><a href="">Log Out</a></li>
                <li className='shadow-xl w-full text-center p-3 flex flex-col'><a href="/profile" className='text-3xl w-full flex justify-center'><FaRegUserCircle/></a></li>
              </ul>
            </div>
          )
        }
    </div>
  )
}

export default Navbar
