import React, { useState } from 'react'
import { postRequestWithToken } from '../../services/Api';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateCommittee() {
    const location = useLocation();
    const {state} = location;
    const [details,setDetails] = useState(state?.cc);

    const navigate = useNavigate();

    console.log("details",details);
    const updateCc=async(e)=>{
        e.preventDefault();
        const res = await postRequestWithToken(`cc/update/${details._id}`,details);
        if(res?.status==200){
            toast.success("Successfully updated");
            navigate('/collegecommittee');
        }else{
            toast.error("Some Error Occurs!")
        }
    }

  return (
    <div>
        <div className='h-full bg-white p-3'>
          <div className='md:w-1/3 w-full bg-indigo-50 h-full mx-auto p-5 border rounded-xl'>
            <h1 className='text-center font-bold text-3xl font-serif pb-3'>Update Club/Committee</h1>

            {/* club/committee */}
            <div className='flex flex-row gap-2'>
                <input type="radio" id="on" name="mode"
                value={details?.isclub}
                onChange={(e)=>setDetails({...details,isclub:true})}
                />
                <label for="club">Club</label>
                <input type="radio" id="off" name="mode" 
                 value={details?.isclub}
                onChange={(e)=>setDetails({...details,isclub:false})}
                />
                <label for="committee">Committee</label>
            </div>

            {/* Event name */}
            <div className='flex flex-col justify-center gap-2'>
                {
                    details?.isclub === true ?
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
                // onChange={(e)=>{setDetails({...details,email:e.target.value})}}
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
                onClick={updateCc}>
                {
                    details?.isclub ?
                    <p>Update Club</p> :
                    <p>Update Committee</p>
                }
              </button>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default UpdateCommittee