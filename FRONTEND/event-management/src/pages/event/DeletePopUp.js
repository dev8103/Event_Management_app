import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getRequestWithToken } from '../../services/Api';

function DeletePopUp() {
    // const [del,setDel] = useState(false);
    // const location = useLocation();
    // const {state} = location;
    // const event = state.event;

    const location = useLocation();
    const {state} = location;
    const event = state?.event;

    const navigate = useNavigate();
    const fun=async(option)=>{
        if(option){
            // Delete Event
            const res = await getRequestWithToken(`events/delete/${event._id}`);
            if(res?.status==200){
                toast.success("Your Event is Succesfully deleted.");
                // navigate('/admineventlist');
            }else{
                toast.error("Error.");
            }
        }
        navigate('/admineventlist');
    }
    useEffect(()=>{
        console.log("I am DeletePopup")
    },[])
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='h-2/5 md:w-2/6 bg-gradient-to-b from-cyan-100 to-blue-200 border rounded-lg mx-auto px-3'>
            <div className='h-3/4 flex flex-col justify-center items-center'>
                <Player
                    src='https://lottie.host/656a394d-fb00-4f18-bfd6-ed532cdd2974/Wpa9zyzuUY.json'
                    className="player w-32 h-32"
                    loop
                    autoplay/>
                <p className='text-xl font-semibold'>Do You Really Want To Delete It?</p>
            </div>
            <div className='flex gap-3 h-1/4'>
                <button className='border rounded-md bg-blue-600 px-2 py-2 h-14 w-1/2  text-white font-bold text-xl' onClick={()=>fun(false)}>Cancel</button>
                <button className='border rounded-md bg-red-500 px-2 py-2 h-14 w-1/2 text-white font-bold text-xl' onClick={()=>fun(true)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeletePopUp