import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { TextField } from '@mui/material'
import { Player } from '@lottiefiles/react-lottie-player'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { postRequest } from '../../services/Api';

function SignUp() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const [phone,setPhone]=useState("");
    const [confirmPass,setConfirmPass]=useState("");
    // const [loading,setLoading]=useState(false);
    const userData={
        name:name,
        username:username,
        email:email,
        phoneNumber:phone,
        password:password
    }
    const navigate = useNavigate();

    const validate=()=>{
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const specialCharCheck=()=>{
        let n=password.length;
        // console.log(n);
        for(let i=0;i<n;i++){
            let ch=password[i];
            if(ch>='A' && ch<='Z')    continue;
            if(ch>='a' && ch<='z')   continue;
            if(ch>='0' && ch<='9')    continue;
            return true;
        }
        return false;
    }

    const signUp=async (e)=>{
        e.preventDefault();
        // console.log(email);
        // console.log(password);
        // setLoading(true);
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if(email==""){
            toast.error("Email is Required!");
        }else if(!validate()){
            toast.error("Invalid Email Address.");
        }else if (!password.match(lowerCase)) {
            toast.error("Password should contains lowercase letters!");
        }else if (!password.match(upperCase)) {
            toast.error("Password should contain uppercase letters!");
        }else if (!password.match(numbers)) {
            toast.error("Password should contains numbers also!");
        }else if(!specialCharCheck()){
            toast.error("The password should contain at least one special character.");
        }else if (password.length < 8) {
            toast.error("Password length should be more than 8.");
        }else if(password!==confirmPass){
            toast.error("Password And Confirm Password Are Mismatch");
        }else{
            console.log(userData);
            const res = await postRequest("student/signup",userData);
            console.log(res?.data);
            navigate('/mobileauth');
        }
        // setLoading(false);
    }
  return (
    <Layout>
        <div>
            <div className='p-4 h-full backdrop-blur-[3px] bg-slate-200/100 w-full flex justify-center items-center'>
                <div className='md:w-1/3 h-full w-full rounded-3xl backdrop-blur-2xl bg-white/30 py-4'>

                    {/* signup animation */}
                    <div className='h-2/6 w-full flex flex-col justify-end items-center text-2xl font-bold'>
                          <Player
                          src='https://lottie.host/a81592af-2449-4d44-becf-f94e04fc9af8/oaunHnQqoG.json'
                          className="player w-32 h-32"
                          loop
                          autoplay/>
                        <div className='pb-2'>SIGN UP</div>
                    </div>

                    {/* signup form */}
                    <div className='h-full flex flex-col gap-4 w-5/6 mx-auto justify-center'>
                        <TextField 
                            type="text" 
                            id="outlined-controlled"
                            label="Full name"
                            placeholder='Enter your Full name' 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                        <TextField 
                            type="text" 
                            id="outlined-controlled"
                            label="Username"
                            placeholder='Enter your username' 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                        <TextField 
                            type="email" 
                            id="outlined-controlled"
                            label="Email Address"
                            placeholder='Enter your email' 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        <TextField 
                            type="text" 
                            id="outlined-controlled"
                            label="Phone Number"
                            placeholder='Enter your phone number'  
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            />
                        <TextField 
                            type="password" 
                            label="Password"
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        <TextField 
                            type="password" 
                            label="Confirm Password"
                            placeholder='Enter your Confirm Password'
                            value={confirmPass}
                            onChange={(e)=>setConfirmPass(e.target.value)}
                            />
                    </div>

                    {/* signup button */}
                    <div className='h-1/4 text-md pt-4 w-5/6 mx-auto text-white flex flex-col gap-4'>
                        <button 
                            className='btn bg-indigo-600 border rounded-md h-12 hover:bg-slate-500 text-white font-semibold'
                            onClick={signUp}
                            >SIGN UP
                        </button>
                        <a href="/login" className='text-black underline underline-offset-1'>
                            <p className='text-black font-semibold text-center'>Alreay Have An Account?  
                                <span className='text-blue-600'> Login</span>
                            </p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </Layout>
  )
}

export default SignUp