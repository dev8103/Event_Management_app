import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { postRequestWithToken } from '../../services/Api';
import { useNavigate } from 'react-router-dom';

function CreateCommittee() {
    const [details,setDetails] = useState({
        isClub:false,
        name:"",
        description:"",
        email:"",
        password:"",
    });

    const navigate = useNavigate();

    const addCc=async(e)=>{
        e.preventDefault();
        console.log("details",details);
        const res = await postRequestWithToken('cc/create',details);
        console.log("res",res);
        if(res?.status==200){
            navigate('/collegecommittee');
        }else{
            toast.error("Error");
        }
    }

  return (
    <div>
        <div className='h-full bg-white p-3'>
          <div className='md:w-1/3 w-full bg-indigo-50 h-full mx-auto p-5 border rounded-xl'>
            <h1 className='text-center font-bold text-3xl font-serif pb-3'>Create Club/Committee</h1>

            
            {/* club/committee */}
            <div className='flex flex-row gap-2'>
                <input type="radio" id="on" name="mode" value="Club" 
                onChange={(e)=>setDetails({...details,isClub:true})}
                />
                <label for="club">Club</label>
                <input type="radio" id="off" name="mode" value="Committee" 
                onChange={(e)=>setDetails({...details,isClub:false})}
                />
                <label for="committee">Committee</label>
            </div>

            {/* Event name */}
            <div className='flex flex-col justify-center gap-2'>
                {
                    details?.isClub === true ?
                    <label htmlFor="name">
                    Club Name: 
                    </label>:
                    <label htmlFor="name">
                    Committee Name:
                    </label>
                }
              <input 
                type="text" 
                className='h-10 border rounded-md px-3'
                value={details?.name}
                onChange={(e)=>setDetails({...details,name:e.target.value})}
                />
            </div>

            {/* Description */}
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="name">Description:</label>
              <textarea className='h-48 border rounded-md px-3'
              value={details?.description}
              onChange={(e)=>{setDetails({...details,description:e.target.value})}}
              >
                {details?.description}
              </textarea>
            </div>

            {/* Email */}
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                className='h-10 border rounded-md px-3'
                value={details?.email}
                onChange={(e)=>{setDetails({...details,email:e.target.value})}}
                />
            </div>

            {/* password */}
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                className='h-10 border rounded-md px-3'
                value={details?.password}
                onChange={(e)=>{setDetails({...details,password:e.target.value})}}
                />
            </div>

            {/* Add Club/Committee */}
            <div className='flex flex-col justify-center gap-2 pt-2'>
              <button 
                className='btn bg-indigo-600 border rounded-md h-10 hover:bg-slate-500 text-white font-semibold'
                onClick={addCc}>
                {
                    details?.isClub ?
                    <p>Add Club</p> :
                    <p>Add Committee</p>
                }
              </button>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default CreateCommittee