import { Player } from '@lottiefiles/react-lottie-player'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { postRequest } from '../../services/Api';

function UpdatePassVerify() {
    const [otp,setOtp]=useState("");
    const [pass,setPass]=useState("");
    const [cpass,setCpass]=useState("");
    const [email,setEmail]=useState("");
    const Data={
        email:email,
        otp:otp,
        password:pass
    }
    const changePass=async()=>{
        if(pass!=cpass){
            toast.error("Password MisMatch.");
        }else{
            const res = await postRequest('student/updateforgotpassword',Data);
            if(res?.status==200){
                toast.success("Password Updated Succesfully.");
            }else{
                toast.error("Try Again Later...");
            }
        }
    }
  return (
    <div>
        <div>
         <div className='h-screen w-full bg-cyan-100 flex justify-center items-center px-4'>
            <div className='backdrop-blur-xl bg-white/30 md:w-1/3 h-4/5  flex flex-col justify-around text-center p-8 border rounded-xl shadow-xl'>
                <div>
                    <Player
                    src="https://lottie.host/b778af9e-ea8d-4233-88d8-df75b57adb36/sWj2AX7Zyu.json"
                    className="player w-40 h-40"
                    loop
                    autoplay/>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Enter Verification Code</h1>
                    <p>We have sent the Verification code to your email address</p>
                </div>
                <div className='flex gap-2 flex-col py-2'>
                
                <TextField
                    type="text" 
                    id="outlined-controlled"
                    label="One Time Password"
                    placeholder='Enter OTP'   
                    value={otp}
                    onChange={(e)=>setOtp(e.target.value)}
                />
                <TextField
                    type="text" 
                    id="outlined-controlled"
                    label="New Password"
                    placeholder='Enter New Password'   
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                />
                <TextField
                    type="text" 
                    id="outlined-controlled"
                    label="Confirm Password"
                    placeholder='Enter Confirm Password'   
                    value={cpass}
                    onChange={(e)=>setCpass(e.target.value)}
                />
                </div>
                <div>
                    <p>
                        Don't Receive the OTP?
                        <span><a href="" className='text-cyan-900 font-bold'> RESEND OTP</a></span>
                    </p>
                </div>
                <button 
                    className='btn bg-cyan-700 border rounded-md h-12 hover:bg-blue-900 text-white font-semibold'
                    onClick={changePass}
                >CONFIRM</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UpdatePassVerify