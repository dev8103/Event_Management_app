import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import EventCard from '../../components/EventCard'
import { useNavigate } from 'react-router-dom'
import events from './events.json'

function AllEventList() {
    const navigate = useNavigate();
    const redirectcreate=()=>{
        navigate('/create');
    }
    // console.log(events);
    const [items,setItems]=useState(events);

    const handleClick=(type)=>{
        const temp=items.filter((data)=>data.mode===type)
        setItems(temp);
    }
    
  return (

    <Layout>
        <div className='bg-blue-100 w-full'>
            <div className='w-4/5 mx-auto h-full flex flex-col gap-4 p-4'>
                <div className='flex justify-between items-center'>
                    <div className='py-4 flex gap-4'>
                        <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>All Events</button>
                        <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>Past Events</button>
                        <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>Upcoming Events</button>
                        <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'
                                onClick={()=>handleClick("online")}>Online Events</button>
                        <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'
                                onClick={()=>handleClick("offline")}>Offline Events</button>
                    </div>
                    <div>
                        <button className='bg-indigo-600 rounded-full h-10 px-5 font-bold text-md text-white hover:bg-indigo-800 hover:text-white' 
                                onClick={redirectcreate}>Add Event</button>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        items.map((event)=>{
                            return(
                                <EventCard event={event}/>    
                            )
                        })
                    }
                    {/* <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/> */}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AllEventList