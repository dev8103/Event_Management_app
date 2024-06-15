import { Player } from '@lottiefiles/react-lottie-player'
import { TextField } from '@mui/material'
import React from 'react'

function CodeVerification() {
  return (
    <div>
         <div className='h-screen w-full bg-cyan-100 flex justify-center items-center px-4'>
            <div className='backdrop-blur-xl bg-white/30 md:w-1/3 md:h-2/3 h-4/5 flex flex-col justify-around text-center p-8 border rounded-xl shadow-xl'>
                <div>
                    <Player
                    src="https://lottie.host/b778af9e-ea8d-4233-88d8-df75b57adb36/sWj2AX7Zyu.json"
                    className="player w-40 h-40"
                    loop
                    autoplay/>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Enter Verification Code</h1>
                    <p>We have sent the Verification code to your mobile number</p>
                </div>
                <TextField
                    type="text" 
                    id="outlined-controlled"
                    label="One Time Password"
                    placeholder='Enter OTP'   
                />
                <button 
                    className='btn bg-cyan-700 border rounded-md h-12 hover:bg-blue-900 text-white font-semibold'
                    // onClick={login}
                >VERIFY</button>
            </div>
        </div>
    </div>
  )
}

export default CodeVerification