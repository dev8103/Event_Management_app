import React from 'react'

function RegistrationFacility() {
  return (
    <div className='bg-cyan-50/10 flex justify-center'>
        <div className='h-screen w-4/5 flex justify-center items-center gap-5'>
            <div className='h-2/3 w-1/3 text-center p-2 bg-cyan-100 shadow-xl rounded-md'>
                <h1 className='font-bold text-2xl'>Simple Ticket</h1>
                <h2>price:1000</h2>
                <h3>Services:</h3>
            </div>
            <div className='h-2/3 w-1/3 text-center p-2 bg-cyan-100 shadow-xl rounded-md'>
                <h1 className='font-bold text-2xl'>Pro Ticket</h1>
                <h2>price:3000</h2>
                <h3>Services:</h3>
            </div>
        </div>
    </div>
  )
}

export default RegistrationFacility