import React, { useEffect, useState } from 'react'
import { getRequestWithToken } from '../../services/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CollegeCommittees() {
    const [details,setDetails]=useState([]);

    const getCc=async()=>{
        // e.preventDefault();
        const res = await getRequestWithToken('cc/get');
        console.log("Res",res?.data);
        if(res?.status==200){
            setDetails(res?.data);
        }else{
            toast.error("Can't Get Committee details");
        }
    }

    const navigate = useNavigate();
    const moreDetails=(cc)=>{
        navigate('/committeedetails',{state:{cc}});
    }

    const editCc=(cc)=>{
        // console.log("cc",cc);
        navigate('/updatecc',{state:{cc}});
    }

    const deleteCc=(cc)=>{
        navigate('/deletecc',{state:{cc}});
    }
    useEffect(()=>{
        getCc();
    },[]);

  return (
    <div className='h-screen'>
        <div className='h-full w-full bg-blue-50'>
            <div className='h-full w-4/5 mx-auto  p-16 flex flex-col justify-around'>
                <h1 className='font-bold text-3xl'>College Committees</h1>
                <p className='text-2xl pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nulla soluta in eius est similique consequuntur voluptatem ad fugiat, facilis velit reiciendis dolor maiores. Numquam consequatur perspiciatis explicabo esse quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem reiciendis eum quaerat, commodi sit et ut ducimus aut possimus? Debitis repellendus voluptatibus pariatur magni sequi aperiam doloremque porro tempora!</p>

                <div className='w-full text-blue-900 text-xl underline flex p-5 flex-col'>
                    {
                        details?.map((cc,idx)=>{
                            console.log("ccdetails",cc);
                            return(
                                <div key ={idx} className='w-full flex flex-row gap-5 justify-start items-center'>
                                    <h1>{cc?.name}</h1>
                                    <button  onClick={()=>moreDetails(cc)}>More Details</button>
                                    <button onClick={()=>editCc(cc)}>Edit</button>
                                    <button onClick={()=>deleteCc(cc)}>Delete</button>
                                    {/* <a href="Cultural" >cc.?name</a> */}
                                    {/* <a href="Cultural">Cmc</a>
                                    <a href="Cultural">Sports</a>
                                    <a href="Cultural">Election</a>
                                    <a href="Cultural">Acadamic</a> */}
                                </div>
                            )
                        }
                        )
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollegeCommittees