import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
// import { TextField } from '@mui/material'
import { Player } from '@lottiefiles/react-lottie-player'
import { Navigate, useNavigate } from 'react-router-dom';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { postRequest } from '../../services/Api';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [typeOfUser,setTypeOfUser]=useState("");
    const [loading,setLoading]=useState(false);

    const navigate = useNavigate();

    const login=async ()=>{
        const userData={
            email:email,
            password:password,
        }
        if(typeOfUser == "student"){
            setLoading(true);
            const response = await postRequest("student/login", userData);
            console.log(response?.data)
            
            if(response?.status == 200){

                localStorage.setItem('user',JSON?.stringify(response?.data?.accessToken));
                localStorage.setItem('type', JSON?.stringify(response?.data?.type));
                toast.success("Login succesfull");
                console.log(localStorage.getItem('user') || '')
                navigate('/')
            }
            else{
                toast.error(response?.data?.message);
                setEmail("");
                setPassword("");
            }
            setLoading(false);
        }
        if(typeOfUser == "sbg"){
            const response = await postRequest("sbg/login", userData);
            console.log(response?.data)
            
            if(response?.status == 200){

                localStorage.setItem('user',JSON?.stringify(response?.data?.accessToken));
                localStorage.setItem('type', JSON?.stringify(response?.data?.type))
                console.log(localStorage.getItem('user') || '')
                navigate('/')
            }
            else{
                toast.error(response?.data?.message);
                setEmail("");
                setPassword("");
            }
        }
        if(typeOfUser == "committee"){
            const response = await postRequest("cc/login", userData);
            console.log(response?.data)
            
            if(response?.status == 200){

                localStorage.setItem('user',JSON?.stringify(response?.data?.accessToken));
                localStorage.setItem('type', JSON?.stringify(response?.data?.type))
                console.log(localStorage.getItem('user') || '')
                navigate('/')
            }
            else{
                toast.error(response?.data?.message);
                setEmail("");
                setPassword("");
            }
        }
        console.log(typeOfUser);
        // navigate('/');
    }
    useEffect(()=>{

    },[]);
  return (
    <Layout>
        <div>
        {
            loading ?
            <Loader/>
            :<div className='px-4 h-screen backdrop-blur-[3px] bg-slate-200/100 w-full flex justify-center items-center'>
                <div className='md:w-1/3 h-5/6 w-full rounded-3xl backdrop-blur-2xl bg-white/20 py-4'>

                    {/* login animation */}
                    <div className='h-2/6 w-full flex flex-col justify-start items-center text-2xl font-bold'>
                          <Player
                          src='https://lottie.host/bfbe4fe9-e95f-4a54-8cd5-8294f80a2aea/wwV813qp75.json'
                          className="player w-32 h-32"
                          loop
                          autoplay/>
                        <div>Sign In</div>
                    </div>

                    {/* form details */}
                    <div className='flex flex-col gap-4 w-5/6 mx-auto justify-center pt-4'>
                        <TextField
                            type="email" 
                            id="outlined-controlled"
                            label="Email Address"
                            placeholder='Enter your email' 
                            value={email||""}
                            onChange={(e)=>setEmail(e.target.value)}
                            InputLabelProps={{ shrink: true }} // Not overlapped value and placeholder
                            />
                        <TextField 
                            type="password" 
                            label="Password"
                            placeholder='Enter your password'
                            value={password||""}
                            onChange={(e)=>setPassword(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            />  
                    </div>
                    
                    {/* user type */}
                    <div className='text-center pt-3 pb-3 flex justify-start w-5/6 mx-auto'>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={(e)=>setTypeOfUser(e.target.value)}
                            >
                                <FormControlLabel 
                                    value="sbg"  
                                    control={<Radio checked={typeOfUser === 'sbg'}/>} 
                                    label="sbg" />
                                <FormControlLabel 
                                    value="committee" 
                                    control={<Radio checked={typeOfUser === 'committee'}/>} 
                                    label="committee" />
                                <FormControlLabel 
                                    value="student"  
                                    control={<Radio checked={typeOfUser === 'student'}/>} 
                                    label="student" />

                            </RadioGroup>
                    </div>

                    {/* login button */}
                    <div className='h-1/4 text-md w-5/6 mx-auto text-white flex flex-col gap-4'>
                        <button 
                            className='btn bg-indigo-600 border rounded-md h-12 hover:bg-slate-500 text-white font-semibold'
                            onClick={login}
                            >LOG IN
                        </button>
                            <a href="/signup" className='text-black underline underline-offset-1'>
                                <p className='text-black font-semibold text-center'>Don't Have An Account?  
                                    <span className='text-blue-600'> SignUp</span>
                                </p>
                            </a>
                            <a href="/forgotpass" className='text-black underline underline-offset-1'>
                                <p className='text-black font-semibold text-center'>Forgot Password?
                                    <span className='text-blue-600'>Change Password</span>
                                </p>
                            </a>
                    </div>
                </div>
            </div>

        }
        </div>
    </Layout>
  )
}

export default Login