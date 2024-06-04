import React from 'react'

const event1={
    "id": "evt001",
    "name": "ReactJS Workshop",
    "mode": "offline",
    "location": "New York, NY",
    "startDate": "2024-06-01T10:00:00",
    "endDate": "2024-06-01T16:00:00",
    "capacity": 50,
    "registeredCount": 45
}

function EventCard({event}) {
  return (
    <div className='h-full'>
        <div className='w-full h-full bg-white flex border rounded-tl-3xl rounded-br-3xl'>
            <div className='w-1/2 flex flex-col justify-center gap-5'>
                <h1 className='font-bold text-3xl text-center px-2'>Speakers for the Day</h1>
                <div className='flex gap-20 justify-center py-2 items-center'>
                    <div>
                        <img src="https://static.javatpoint.com/top10-technologies/images/top-10-south-indian-actors1.png" alt="" className='rounded-full h-24 w-24'/>
                        <p className='text-center font-bold'>Ram Charan</p>
                    </div>
                    <div>
                        <img src="https://static.javatpoint.com/top10-technologies/images/top-10-south-indian-actors1.png" alt="" className='rounded-full h-24 w-24'/>
                        <p className='text-center font-bold'>Ram Charan</p>
                    </div>
                    <div>
                        <img src="https://static.javatpoint.com/top10-technologies/images/top-10-south-indian-actors1.png" alt="" className='rounded-full h-24 w-24'/>
                        <p className='text-center font-bold'>Ram Charan</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full text-xl p-3 flex flex-col justify-between'>
                <h1 className='font-bold text-3xl'>{event.name}</h1>
                <p className='pt-2'>{event.mode}</p>
                <p className='pt-2'>{event.location}</p>
                <p className='pt-2'>{event.capacity}</p>
                <p className='pt-2'>{event.registeredCount}</p>
                <div className='flex gap-4 pt-2'>
                    <button className='bg-indigo-600 text-white rounded-xl h-10 w-1/2 px-5 font-bold text-md hover:bg-white hover:text-blue-600 hover:border hover:border-blue-700'>Register</button>
                    <button className='bg-indigo-600 text-white rounded-xl h-10 w-1/2 px-5 font-bold text-md hover:bg-white hover:text-blue-600 hover:border hover:border-blue-700'>More Details...</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventCard