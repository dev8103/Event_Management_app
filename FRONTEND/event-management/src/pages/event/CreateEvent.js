import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../context/data/MyContext';
import { toast } from 'react-toastify';
import DatePicker from 'react-datetime';
import Moment from 'react-moment';
import moment from 'moment';

function CreateEvent() {
  const context=useContext(MyContext);
  const {details,setDetails,allEvents,setAllEvents} = context;
  const navigate = useNavigate();
  const [venue,setVenue]=useState("");

  const addEvent=(e)=>{
    e.preventDefault();
    console.log("venue",venue);
    let f=false;
    for(let i=0;i<allEvents.length;i++){
        if(allEvents[i].location==venue){
          f=true;
        }
    }
    if(f==true){
      toast.error("This Venue Is Not Available");
    }else{
      setAllEvents([...allEvents, details]);
      console.log("alleve",allEvents);
      navigate('/allevents');
    }
    // setTimeout(() => {
    //   window.location.href = '/allevents';
    // }, 1000);
  }
  
  console.log("details",details);

  const today = moment();
    const currentDate = moment().format("DD-MM-YYYY");
    const [selectedDate, setSelectedDate] = useState(currentDate);

    const disFutureDate = (current) => {
        return current.isAfter(today);
    };
    const handleDateChange = (date) => {
        const formattedDate = moment(date).format("DD-MM-YYYY");
        setSelectedDate(formattedDate);
    };
  
  return (
    <div>
        <div className='h-full bg-white p-2'>
          <div className='md:w-1/3 w-full bg-indigo-50 h-full mx-auto p-5 border rounded-xl'>
            <h1 className='text-center font-bold text-4xl font-serif'>Create Event</h1>
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="name">Event Name:</label>
              <input 
                type="text" 
                className='h-10 border rounded-md px-3'
                value={details?.name}
                onChange={(e)=>setDetails({...details,name:e.target.value})}/>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="name">Description:</label>
              <textarea className='h-48 border rounded-md px-3'></textarea>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <div class="col-span-full">
              <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Banner Photo:</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
        </div>
            </div>
            <div className='flex flex-col  justify-between my-2'>
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">Start Time:</label>
                <DatePicker
                    dateFormat="DD-MM-YYYY"
                    timeFormat={false}
                    isValidDate={disFutureDate}
                    value={selectedDate}
                    onChange={handleDateChange}
                    inputProps={{ readOnly: true }}
                    fullWidth
                />
                <input type="datetime-local" name="start" id="" className='h-10 border rounded-md px-3'/>
               </div>
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">End Time:</label>
                <input type="datetime-local" name="" id="" className='h-10 border rounded-md px-3'/>
               </div>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="type">Event Type:</label>
              <div className='mt-2'>
                <input type="checkbox" name="online" id="online" value="Online"/>
                <label htmlFor="online" className='pl-3'>Online</label>
                <input type="url" name="link" id="link" className='h-8 w-full border rounded-md px-3'/>
              </div>
              <div className='my-2 flex flex-col'>
                <div>
                  <input type="checkbox" name="offline" id="offline" value="Offline"/>
                  <label htmlFor="offline" className='pl-3'>Offline</label>
                </div>
                <select name="allclass"   
                  value={venue} 
                  onChange={(e)=>{
                    setVenue(e.target.value);
                    setDetails({...details,location:e.target.value});
                  }
                  } 
                className='border-1 border-gray-500 p-3 rounded-md outline-none'>
                  <option value="0" name="allclass" >NONE</option>
                  <option value="1" name="allclass" >CEP-101</option>
                  <option value="2" name="allclass" >CEP-102</option>
                  <option value="3" name="allclass" >CEP-103</option>
                  <option value="4" name="allclass" >CEP-104</option>
                  <option value="5" name="allclass" >CEP-105</option>
                  <option value="6" name="allclass" >CEP-106</option>
                  <option value="7" name="allclass" >LT-1</option>
                  <option value="8" name="allclass" >LT-2</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col justify-between my-2'>
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">Capacity</label>
                <input type="number" name="cap" id="" placeholder='capacity of attendees' className='h-10 border rounded-md px-3'
                       onChange={(e)=>setDetails({...details,capacity:e.target.value})}/>
               </div>
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">Total Registered</label>
                <input type="number" name="cap" id="" placeholder='capacity of attendees' className='h-10 border rounded-md px-3'
                      onChange={(e)=>setDetails({...details,registeredCount:e.target.value})}/>
               </div>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <h1>Sponser's Details:</h1>
              <input type="text" placeholder='Sponser Name' className='h-10 border rounded-md px-3'/>
              <input type="url" name="slink" id="" placeholder='Sponser link' className='h-10 border rounded-md px-3'/>
              <button className='btn bg-indigo-600 border rounded-md h-10 hover:bg-slate-500 text-white font-semibold'>Add Sponser</button>
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <h1 className='mt-2'>Event Coordinator Details:</h1>
              <label htmlFor="name">Name</label>
              <input type="text" className='h-10 border rounded-md px-3'/>
              <label htmlFor="phone">Mobile No</label>
              <input type="number" name="phone" id="" className='h-10 border rounded-md px-3'/>
            </div>
            <div className='flex flex-col justify-center gap-2 pt-2'>
              <button 
                className='btn bg-indigo-600 border rounded-md h-10 hover:bg-slate-500 text-white font-semibold'
                onClick={addEvent}>Add Event</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateEvent