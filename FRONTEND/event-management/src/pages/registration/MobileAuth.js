import { Player } from '@lottiefiles/react-lottie-player'
import { TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function MobileAuth() {

  const navigate=useNavigate();
  const verify=()=>{
        navigate('/codeverification');
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
                    <h1 className='text-2xl font-bold'>Enter Your Mobile Number</h1>
                    <p>We will send you confirmation code</p>
                </div>
                <TextField 
                    type="text" 
                    id="outlined-controlled"
                    label="Phone Number"
                    placeholder='Enter your phone number'

                />
                <button 
                    className='btn bg-cyan-700 border rounded-md h-12 hover:bg-blue-900 text-white font-semibold'
                    onClick={verify}
                >VERIFY</button>
            </div>
        </div>
    </div>
  )
}

export default MobileAuth