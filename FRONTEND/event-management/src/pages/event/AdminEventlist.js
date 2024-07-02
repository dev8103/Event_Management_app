import React, { useContext, useEffect, useState } from 'react'
import events from './events.json'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import DeletePopUp from './DeletePopUp';
import MyContext from '../../context/data/MyContext';
import moment from 'moment';
import { getRequest } from '../../services/Api';
import { toast } from 'react-toastify';
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
    const context = useContext(MyContext);
    // const {allEvents,setAllEvents,details,setdetails} = context;
    const [items,setItems] = useState([]);
    // const [startDate,setStartDate]=useState("");
    // cosnt [endDate,setEndDate]=useState("");
    // const [del,setDel] = useState(false);
    const navigate = useNavigate();
    const deleteEvent=(event)=>{
        console.log(event);
        navigate('/deletepopup',{state:{event}});
    }

    const editEvent=(event)=>{
        navigate('/editevent',{state:{event}});
    }

    const eventsLoad=async(e)=>{
        const res = await getRequest('events/get');
        console.log(res.data);
        if(res.status==200){
            const allEvents=res.data;
            setItems(allEvents);
        }else{
            toast.error("No data found.");
        }
    }

    const timeFormatChange=(startTimestamp,endTimestamp)=>{
        const sDate = moment(startTimestamp).format('dddd, MMMM Do YYYY, h:mm:ss a');
        const eDate = moment(endTimestamp).format('dddd, MMMM Do YYYY, h:mm:ss a');
        return {sDate,eDate};
        // setStartDate(sDate);
        // setEndDate(eDate);
        // console.log(sDate);
        // console.log(eDate);
    }
    
    useEffect(()=>{
        eventsLoad();
    },[])
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
                            {/* <th className='border border-slate-400 px-2'>Day-Timing</th> */}
                            <th className='border border-slate-400 px-2'>Event-Mode</th>
                            <th className='border border-slate-400 px-2'>Allowed Guestes</th>
                            {/* <th className='border border-slate-400 px-2'>Registered</th> */}
                            <th className='border border-slate-400 px-2'>Description</th>
                            <th className='border border-slate-400 px-2'>Contact-Detail</th>
                            <th className='border border-slate-400 px-2'>E</th>
                            <th className='border border-slate-400 px-2'>D</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        items?.map((event,idx)=>{
                            const { sDate, eDate } = timeFormatChange(event?.startTime, event?.endTime);
                            return(
                                <tr key={idx} className='bg-blue-100'>
                                    <td className='border border-slate-400 px-2'>{event?.name}</td>
                                    <td className='border border-slate-400 px-2'>{sDate}</td>
                                    <td className='border border-slate-400 px-2'>{eDate}</td>
                                    {/* <td className='border border-slate-400 px-2'>10:00 AM to 5:00 PM</td> */}
                                    <td className='border border-slate-400 px-2'>{event?.isOnline}</td>
                                    <td className='border border-slate-400 px-2'>{event?.maxCapacity}</td>
                                    {/* <td className='border border-slate-400 px-2'>{event.registeredCount}</td> */}
                                    <td className='border border-slate-400 px-2'>
                                        <div className='overflow-y-auto h-16'>
                                            {event?.description}
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