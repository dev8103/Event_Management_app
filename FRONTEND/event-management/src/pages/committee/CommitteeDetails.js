import React, { useEffect } from 'react'
import { DiVim } from 'react-icons/di'
import { useLocation } from 'react-router-dom'

function CommitteeDetails() {
  const location = useLocation();
  const {state} = location;
  const cc = state?.cc;

  useEffect(()=>{
    console.log("cc",cc);
  },[]);

  return (
    <div className='h-screen flex flex-col bg-cyan-50 justify-center'>
        <div className='w-full flex justify-center'>
            <div className='h-full w-4/5 flex'>
                <div className='h-full w-2/3 mx-auto p-16 flex flex-col justify-around'>
                    <h1 className='font-bold text-3xl pt-3'>{cc?.name}</h1>
                    <p className='text-2xl'> {cc?.description} </p>
                    <p> {cc?.email} </p>
                </div>
                {/* <div className='h-full w-1/3 p-2'>
                    <h1 className='font-bold text-3xl text-center pt-16'>MEMBERS</h1>
                    <div className=' w-full bg-cyan-100 text-xl p-5 mt-5 shadow-2xl border rounded-xl'>
                        <ul className='list-disc flex flex-col gap-5 pl-8'>
                            <li>
                                <a href="">Shiv Birla</a>
                                <h1>Convener</h1>
                            </li>
                            <li>
                                <a href="">Aaditya Birla</a>
                                <h1>Dep. Convener</h1>
                            </li>
                            <li>
                                <a href="">Shiv Patel</a>
                                <h1>Member</h1>
                            </li>
                            <li>
                                <a href="">Vijay Yadav</a>
                                <h1>Member</h1>
                            </li>
                            <li>
                                <a href="">Ajay Shukla</a>
                                <h1>Member</h1>
                            </li>
                            <li>
                                <a href="">Mohan Sharma</a>
                                <h1>Member</h1>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default CommitteeDetails