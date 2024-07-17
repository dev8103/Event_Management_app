import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { postRequestWithToken } from '../../services/Api';
import { toast } from 'react-toastify';

function EditEvent() {
    const location = useLocation();
    const {state} = location;
    const [event,setEvent] = useState(state?.event);


    const updateGuest = (e, idx) => {
      const updatedGuests = [...event.mainGuest];
      updatedGuests[idx] = e.target.value;
      setEvent({ ...event, mainGuest: updatedGuests });
    };
  
    const addGuest = (e) => {
      e.preventDefault();
      setEvent({ ...event, mainGuest: [...event.mainGuest, ""] });
    };
  
    const updateSponsor = (e, idx) => {
      const updatedSponsors = [...event.sponsors];
      updatedSponsors[idx] = e.target.value;
      setEvent({ ...event, sponsors: updatedSponsors });
    };
  
    const addSponsor = (e) => {
      e.preventDefault();
      setEvent({ ...event, sponsors: [...event.sponsors, ""] });
    };
  
    const updateCoordinator = (e, idx, field) => {
      const updatedCoordinators = [...event.coordinators];
      updatedCoordinators[idx] = { ...updatedCoordinators[idx], [field]: e.target.value };
      setEvent({ ...event, coordinators: updatedCoordinators });
    };
  
    const addCoordinator = (e) => {
      e.preventDefault();
      setEvent({ ...event, coordinators: [...event.coordinators, { name: "", mobileNumber: "" }] });
    };

    // Sponser
  const [sname,setSname]=useState("");
  const [spon,setSpon]=useState([]);

  // Guest
  const [gname,setGname]=useState("");
  const [guest,setGuest]=useState([]);

  // Coordinator
    const [formInput,setFormInput]=useState({
      name:"",
      mobileNumber:""
    });
    const [coord,setCoord]=useState([]);

    const navigate = useNavigate();
    const saveEvent=async()=>{
        console.log(event);
        const res = await postRequestWithToken(`events/update/${event._id}`,event);
        if(res.status==200){
            toast.success("Events update succesfully.");
            navigate('/admineventlist');
        }else{
          toast.error("Something went wrong.");
        }
    }

    const addCoordi=(e)=>{
      e.preventDefault();
      setCoord((prevCoord)=>[...prevCoord,formInput]);
      setEvent({...event,coordinators:coord});
      // console.log("coord",coord);
    }
  
    // const addGuest=(e)=>{
    //   e.preventDefault();
    //   setGuest((prevGuest)=>[...prevGuest,gname]);
    //   setEvent({...event,mainGuest:guest});
    //   // console.log("guest",guest);
    // }
  
    const addSpon=(e)=>{
      e.preventDefault();
      setSpon((prevSpon)=>[...prevSpon,sname]);
      setEvent({...event,sponsors:spon});
      // console.log("spon",spon);
    }

    useEffect(()=>{
      console.log("event",event);

    },[event]);

    const formatDateTime = (dateTime) => {
      return new Date(dateTime).toISOString().slice(0, 16);
    };
  return (
    <div>
        <div className='h-full bg-white p-2'>
          <div className='md:w-1/3 w-full bg-indigo-50 h-full mx-auto p-5 border rounded-xl'>
            <h1 className='text-center font-bold text-4xl font-serif'>Edit Event</h1>

            {/* Event name */}
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="name">Event Name:</label>
              <input 
                type="text" 
                className='h-10 border rounded-md px-3'
                value={event?.name}
                onChange={(e)=>setEvent({...event,name:e.target.value})}/>
            </div>

            {/* Description */}
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="name">Description:</label>
              <textarea className='h-48 border rounded-md px-3'
              onChange={(e)=>setEvent({...event,description:e.target.value})}
              >{event?.description}</textarea>
            </div>

            {/* Image */}
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

            {/* Times */}
            <div className='flex flex-col  justify-between my-2'>
              {/* Start time */}
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">Start Time:</label>
                {/* <DatePicker
                    dateFormat="DD-MM-YYYY"
                    timeFormat={false}
                    isValidDate={disFutureDate}
                    value={selectedDate}
                    onChange={handleDateChange}
                    inputProps={{ readOnly: true }}
                    fullWidth
                /> */}
                <input type="datetime-local" name="start" id="" className='h-10 border rounded-md px-3'
                  value={event?.startTime ? formatDateTime(event.startTime) : ""}
                  onChange={(e) => setEvent({ ...event, startTime: e.target.value })}
                />
               </div>
              {/* End time */}
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">End Time:</label>
                <input type="datetime-local" name="" id="" className='h-10 border rounded-md px-3'
                  value={event?.endTime ? formatDateTime(event.endTime) : ""}
                  onChange={(e) => setEvent({ ...event, endTime: e.target.value })}
                />
               </div>
            </div>

            {/* Event mode */}
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="type">Event Type:</label>
              {/* Link */}
              <div className='mt-2'>
                <label htmlFor="foronline">Link</label>
                <input type="url" name="link" id="link" className='h-8 w-full border rounded-md px-3'
                  value={event?.meetingLink}
                  onChange={(e)=>setEvent({event,meetingLink:e.target.value})}
                />
              </div>
              <div className='mt-2 my-2 flex flex-col'>
                {/* mode */}
                <div className=''>
                  <input type="radio" id="on" name="mode" value="online" onChange={(e)=>setEvent({...event,isOnline:true})}/>
                  <label for="online">online</label>
                  <input type="radio" id="off" name="mode" value="offline" onChange={(e)=>setEvent({...event,isOnline:false})}/>
                  <label for="offline">offline</label>
                </div>
              </div>
            </div>
            {/* Venue */}
            <div className='flex flex-col justify-center gap-2'>
                <select name="allclass"   
                  value={event?.venue} 
                  onChange={(e)=>{
                    // setVenue(e.target.value);
                    setEvent({...event,venue:e.target.value});
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

            {/* Capacity */}
            <div className='flex flex-col justify-between my-2'>
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">Capacity</label>
                <input type="number" name="cap" id="" placeholder='capacity of attendees' className='h-10 border rounded-md px-3'
                       value={event?.maxCapacity}
                       onChange={(e)=>setEvent({...event,maxCapacity:e.target.value})}/>
               </div>
            </div>

            <h1>Main Guest's Details:</h1>
            {/* Main Guest */}
            {
              event?.mainGuest?.map((guest,idx)=>{
                console.log("guest",guest);
                // setGname(guest);
                return(
                  <div key={idx} className='flex flex-col justify-center gap-2'>
                  <input type="text" placeholder='Main Guest Name' className='h-10 border rounded-md px-3'
                    value={guest}
                    onChange={(e) => updateGuest(e, idx)}
                  />
                  {/* <button className='btn bg-indigo-600 border rounded-md h-10 hover:bg-slate-500 text-white font-semibold' onClick={addGuest}>Add Main Guest</button> */}
                  </div>
                )
              })
            }

            {/* Sponser Details */}
            <h1>Sponser's Details:</h1>
            {
              event?.sponsors?.map((sponsor,idx)=>{
                console.log("spon",sponsor);
                return(
                  <div key={idx} className='flex flex-col justify-center gap-2'>
                    <input type="text" placeholder='Sponser Name' className='h-10 border rounded-md px-3'
                      value={sponsor}
                      onChange={(e) => updateSponsor(e, idx)}
                    />
                    {/* <input type="url" name="slink" id="" placeholder='Sponser link' className='h-10 border rounded-md px-3'/> */}
                    {/* <button className='btn bg-indigo-600 border rounded-md h-10 hover:bg-slate-500 text-white font-semibold' onClick={addSponsor}>Add Sponser</button> */}
                  </div>
                )
              })
            }
            

            {/* Event Coordinator */}
            <h1 className='mt-2'>Event Coordinator Details:</h1>
            {
              event?.coordinators?.map((coordinator,idx)=>{
                console.log("coord",coordinator);
                return(
                  <div key={idx} className='flex flex-col justify-center gap-2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" className='h-10 border rounded-md px-3'
                      value={coordinator?.name}
                      onChange={(e) => updateCoordinator(e, idx, "name")}
                    />
                    <label htmlFor="phone">Mobile No</label>
                    <input type="number" name="phone" id="" className='h-10 border rounded-md px-3'
                    value={coord?.mobileNumber}
                    onChange={(e)=>setFormInput({...formInput,mobileNumber:e.target.value})}/>
                    {/* <button className='btn bg-indigo-600 border rounded-md h-10 hover:bg-slate-500 text-white font-semibold' onClick={addCoordinator}>Add Coordinator</button> */}
                  </div>
                )
              })
            }

            {/* Add Event */}
            <div className='flex flex-col justify-center gap-2 pt-2'>
              <button 
                className='btn bg-indigo-600 border rounded-md h-10 hover:bg-slate-500 text-white font-semibold'
                onClick={saveEvent}>Update Event</button>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default EditEvent