import { Player } from '@lottiefiles/react-lottie-player'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postRequest } from '../../services/Api';

function ForgotPass() {
    const [email,setEmail]=useState("");
    const Data={
            email:email
    }
    const navigate=useNavigate();
    const verify=async()=>{
            const res = await postRequest('student/forgotpassword',Data);
            console.log(res?.data?.message);
            if(res?.status==200){
                navigate('/updatepassverify',{state:{email}});
            }
    }
  return (
    <div>
        <div className='h-screen w-full bg-cyan-100 flex justify-center items-center'>
            <div className='backdrop-blur-xl bg-white/30 md:w-1/3 h-2/3 flex flex-col justify-around text-center p-8 border rounded-xl shadow-xl'>
                <div>
                    <Player
                    src="https://lottie.host/84c9a4a3-9180-4685-ba53-16ddf84d8a4f/yVx7wBsc44.json"
                    className="player w-40 h-40"
                    loop
                    autoplay/>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Enter Your Email Address</h1>
                    <p>We will send you confirmation code</p>
                </div>
                <TextField 
                    type="text" 
                    id="outlined-controlled"
                    label="Email Address"
                    placeholder='Enter your email address'
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <button 
                    className='btn bg-cyan-700 border rounded-md h-12 hover:bg-blue-900 text-white font-semibold'
                    onClick={verify}
                >SEND</button>
            </div>
        </div>
    </div>
  )
}

export default ForgotPass