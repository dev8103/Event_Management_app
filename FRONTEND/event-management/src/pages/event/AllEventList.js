import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import EventCard from '../../components/EventCard'
import { useLocation, useNavigate } from 'react-router-dom'
import MyContext from '../../context/data/MyContext';
// import events from './events.json'

function AllEventList() {
    const context = useContext(MyContext);
    const {items,handleClick} = context;

    let type;
    const getUser=()=>{
        type = JSON.parse(localStorage?.getItem('type'));
        console.log("localstorage user",type);
    }

    // const location = useLocation();
    // const {state} = location;
    // const newEvent = state?.details;
    // console.log("new",newEvent);

    const navigate = useNavigate();
    const redirectcreate=()=>{
        navigate('/create');
    }
    // console.log(events);
    useEffect(()=>{
        handleClick("all");
    },[getUser()]);
  return (

    <Layout>
        <div className='bg-blue-100 w-full'>
            <div className='w-full h-full flex flex-col gap-4 p-4'>
                <div className='flex justify-between items-center md:flex-row flex-col'>
                    <div className='py-4 flex gap-4 md:flex-row flex-col'>
                        <button className='bg-gray-50 rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'
                                onClick={()=>handleClick("all")}>All Events</button>
                        <button className='bg-gray-50 rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>Past Events</button>
                        <button className='bg-gray-50 rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>Upcoming Events</button>
                        <button className='bg-gray-50 rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'
                                onClick={()=>handleClick("online")}>Online Events</button>
                        <button className='bg-gray-50 rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'
                                onClick={()=>handleClick("offline")}>Offline Events</button>
                    </div>
                    {
                        type == "cc" ? 
                        <div className='flex justify-center'>
                            <button className='bg-indigo-600 w-full rounded-full h-10 px-5 font-bold text-md text-white hover:bg-indigo-800 hover:text-white' 
                                    onClick={redirectcreate}>Add Event</button>
                        </div>
                        :""
                    }
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        items?.map((event)=>{
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