import React, { useState } from 'react'
import events from './events.json'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import DeletePopUp from '../../components/popup/DeletePopUp';
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

function AdminEventlist() {
    // const [del,setDel] = useState(false);
    const navigate = useNavigate();
    const deleteEvent=(event)=>{
        console.log(event);
        navigate('/deletepopup',{state:{event}});
    }

    const editEvent=(event)=>{
        navigate('/editevent',{state:{event}});
    }
  return (
    <div className='flex justify-center'>
        <div className='p-3'>
            <h1 className='text-center font-bold text-xl pb-2'>All Event Details</h1>
            <div>
            <table className='border-separate border border-slate-400 border-spacing-1/2'>
                <thead>
                    <tr className='w-full bg-indigo-600 text-white'>
                            <th className='border border-slate-400 px-2'>Name</th>
                            <th className='border border-slate-400 px-2'>Start-Date</th>
                            <th className='border border-slate-400 px-2'>End-Date</th>
                            <th className='border border-slate-400 px-2'>Day-Timing</th>
                            <th className='border border-slate-400 px-2'>Event-Mode</th>
                            <th className='border border-slate-400 px-2'>Allowed Guestes</th>
                            <th className='border border-slate-400 px-2'>Registered</th>
                            <th className='border border-slate-400 px-2'>Description</th>
                            <th className='border border-slate-400 px-2'>Contact-Detail</th>
                            <th className='border border-slate-400 px-2'>E</th>
                            <th className='border border-slate-400 px-2'>D</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        events?.map((event,idx)=>{
                            return(
                                <tr key={idx} className='bg-blue-100'>
                                    <td className='border border-slate-400 px-2'>{event.name}</td>
                                    <td className='border border-slate-400 px-2'>1st July 2024</td>
                                    <td className='border border-slate-400 px-2'>3rd July 2024</td>
                                    <td className='border border-slate-400 px-2'>10:00 AM to 5:00 PM</td>
                                    <td className='border border-slate-400 px-2'>{event.mode}</td>
                                    <td className='border border-slate-400 px-2'>{event.capacity}</td>
                                    <td className='border border-slate-400 px-2'>{event.registeredCount}</td>
                                    <td className='border border-slate-400 px-2'>
                                        <div className='overflow-y-auto h-16'>
                                            This event held by this club and committee Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolorem neque commodi suscipit repudiandae harum consequuntur dolorum rem facilis autem qui aliquam necessitatibus sed, vel deleniti reiciendis, nesciunt molestiae voluptatibus.
                                        </div>
                                    </td>
                                    <td className='border border-slate-400 px-2'>event member</td>
                                    <td className='border border-slate-400 px-2'>
                                        <button onClick={()=>editEvent(event)}>
                                            <MdModeEdit/>
                                        </button>
                                    </td>
                                    <td className='border border-slate-400 px-2'>
                                        <button onClick={()=>deleteEvent(event)}>
                                            <MdDelete/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default AdminEventlist