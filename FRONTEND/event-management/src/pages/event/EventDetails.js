import moment from 'moment';
import React from 'react'
import { useLocation } from 'react-router-dom';

function EventDetails() {
    const location = useLocation();
    const {state} = location;
    const event = state?.event;
    const startTimestamp = event?.startTime;
    const endTimestamp = event?.endTime;
    const startDate = moment(startTimestamp).format('dddd, MMMM Do YYYY, h:mm:ss a');
    const endDate = moment(endTimestamp).format('dddd, MMMM Do YYYY, h:mm:ss a');
    console.log(startDate);
    console.log(endDate);
    // const newEvent = await Event.create({
    //     name,
    //     description,
    //     clubCommitteeEmail,
    //     startTime,
    //     endTime,
    //     isOnline,
    //     meetingLink,
    //     venue,
    //     mainGuest,
    //     sponsors,
    //     maxCapacity,
    //     coordinators,
    // })
    // console.log(state?.event);
  return (
    <div className='h-screen bg-blue-50 flex justify-center items-center'>
        <div className='flex justify-center items-center'>
            <div className='w-1/2 h-1/2 flex items-center drop-shadow-xl border rounded-md backdrop-opacity-10 backdrop-invert bg-blue-500/30'>
                <div className='w-1/2 h-full flex flex-col justify-center items-center p-3'>
                    <img src="https://4.imimg.com/data4/UU/DK/MY-5400256/college-festival-500x500.jpg" alt="" className='border rounded-lg'/>
                    <button className='mt-5 border rounded-md backdrop-opacity-80 backdrop-invert bg-blue-500/30 text-white h-10 w-1/2 px-5 font-bold text-md hover:bg-white hover:text-blue-800 hover:border hover:border-blue-700'>Register</button>
                </div>
                <div className='w-1/2 h-full p-2 flex flex-col justify-center'>
                    <h1 className='text-center font-bold text-xl pb-2'>Event Details</h1>
                    <div>
                    <table className='border-separate border border-slate-400 border-spacing-1/2'>
                        <tbody>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>Name</td>
                                <td className='border border-slate-400 px-2'>{event?.name}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>Start Date</td>
                                <td className='border border-slate-400 px-2'>{startDate}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>End Date</td>
                                <td className='border border-slate-400 px-2'>{endDate}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>Day Timing</td>
                                <td className='border border-slate-400 px-2'></td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>Event Mode</td>
                                <td className='border border-slate-400 px-2'>{event?.isOnline}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>Total allowed guests</td>
                                <td className='border border-slate-400 px-2'>{event?.maxCapacity}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>Total registered</td>
                                <td className='border border-slate-400 px-2'>{event?.registeredCount}</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>Description</td>
                                <td className='border border-slate-400 px-2'>
                                    <div className='overflow-y-auto h-32'>
                                        {event?.description}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='border border-slate-400 px-2 font-semibold'>Contact Detail</td>
                                <td className='border border-slate-400 px-2'>event member</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetails