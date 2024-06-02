import React from 'react'
import Layout from '../../components/layout/Layout'
import EventCard from '../../components/EventCard'

function AllEventList() {
  return (
    <Layout>
        <div className='bg-blue-100 w-full'>
            <div className='w-4/5 mx-auto h-full flex flex-col gap-4 p-4'>
                <div className='p-4 flex gap-4'>
                    <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>All Events</button>
                    <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>Past Events</button>
                    <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>Upcoming Events</button>
                    <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>Online Events</button>
                    <button className='bg-white rounded-full h-10 px-5 font-bold text-md hover:bg-indigo-600 hover:text-white'>Offline Events</button>
                </div>
                <div className='flex flex-col gap-5'>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AllEventList