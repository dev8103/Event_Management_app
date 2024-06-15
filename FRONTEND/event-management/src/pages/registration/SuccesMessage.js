import { Player } from '@lottiefiles/react-lottie-player'
import { TextField } from '@mui/material'
import React from 'react'

function SuccesMessage() {
  return (
    <div>
         <div className='h-screen w-full bg-cyan-100 flex justify-center items-center'>
            <div className='backdrop-blur-xl bg-white/30 md:w-1/3 h-2/3 flex flex-col justify-around text-center p-8 border rounded-xl shadow-xl'>
                <div>
                    <Player
                    src="https://lottie.host/227a758c-bbf5-4d7b-9e77-9608d533ddbc/sc4grB0Pey.json"
                    className="player w-40 h-40"
                    loop
                    autoplay/>
                </div>
                <div>
                    <h1 className='text-2xl font-bold pb-3'>Success!</h1>
                    <p>Congratulations! You have been successfully authenticated</p>
                </div>
                <button 
                    className='btn bg-cyan-700 border rounded-md h-12 hover:bg-blue-900 text-white font-semibold'
                    // onClick={login}
                >Continue</button>
            </div>
        </div>
    </div>
  )
}

export default SuccesMessage