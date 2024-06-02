import React from 'react'
import Layout from '../../components/layout/Layout'

function CreateEvent() {
  return (
    <div>
        <div className='h-full bg-white p-2'>
          <div className='w-1/3 bg-indigo-50 h-full mx-auto p-5 border rounded-xl'>
            <h1 className='text-center font-bold text-4xl font-serif'>Create Event</h1>
            <div className='flex flex-col justify-center gap-2'>
              <label htmlFor="name">Event Name:</label>
              <input type="text" className='h-10 border rounded-md px-3'/>
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
            <div className='flex justify-between my-2'>
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">Start Time:</label>
                <input type="date" name="start" id="" className='h-10 border rounded-md px-3'/>
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
              <div className='my-2'>
                <input type="checkbox" name="offline" id="offline" value="Offline"/>
                <label htmlFor="offline" className='pl-3'>Offline</label>
                <textarea name="venue" id="venue" className='h-15 w-full border rounded-md p-2'></textarea>
              </div>
            </div>
            <div className='flex justify-between my-2'>
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">Capacity</label>
                <input type="number" name="cap" id="" placeholder='capacity of attendees' className='h-10 border rounded-md px-3'/>
               </div>
               <div className='flex flex-col gap-2'>
                <label htmlFor="cap">Total Registered</label>
                <input type="number" name="cap" id="" placeholder='capacity of attendees' className='h-10 border rounded-md px-3'/>
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
              <button className='btn bg-indigo-600 border rounded-md h-10 hover:bg-slate-500 text-white font-semibold'>Add Event</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateEvent