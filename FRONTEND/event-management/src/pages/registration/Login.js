import React from 'react'
import Layout from '../../components/layout/Layout'
import { TextField } from '@mui/material'
import { Player } from '@lottiefiles/react-lottie-player'

function Login() {
  return (
    <Layout>
      <div>
            <div className='h-screen backdrop-blur-[3px] bg-slate-200/100 w-full flex justify-center items-center'>
                <div className='xl:w-1/3 h-4/6 rounded-3xl backdrop-blur-2xl bg-white/20 py-4'>
                    <div className='h-2/6 w-full flex flex-col justify-end items-center text-2xl font-bold'>
                        
                          <Player
                          src='https://lottie.host/bfbe4fe9-e95f-4a54-8cd5-8294f80a2aea/wwV813qp75.json'
                          className="player w-32 h-32"
                          loop
                          autoplay/>
                        
                        <div>Sign In</div>
                    </div>
                    <div className='h-2/5 flex flex-col gap-4 w-5/6 mx-auto justify-center'>
                        <TextField 
                            type="email" 
                            id="outlined-controlled"
                            label="Email Address"
                            placeholder='Enter your email' 
                            // className='outline-none border-4 border-b-black border-none rounded-lg py-2 pl-2' 
                            // value={email}
                            // onChange={(e)=>setEmail(e.target.value)}
                            />
                        <TextField 
                            type="password" 
                            label="Password"
                            placeholder='Enter your password'
                            // className='outline-none border border-b-black rounded-lg py-2 pl-2'
                            // value={password}
                            // onChange={(e)=>setPassword(e.target.value)}
                            />
                        
                    </div>
                    <div className='h-1/4 text-md w-5/6 mx-auto text-white flex flex-col gap-4'>
                        <button 
                            className='btn bg-indigo-600 border rounded-md h-12 hover:bg-slate-500 text-white font-semibold'
                            // onClick={login}
                            >LOG IN</button>
                        <a href="/signup">
                        <button 
                            className='btn bg-indigo-600 w-full border rounded-md h-12 hover:bg-slate-500 text-white font-semibold'
                            // onClick={login}
                            >SIGN UP</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Login