import React from 'react'

function CollegeCommittees() {
  return (
    <div className='h-screen'>
        <div className='h-full w-full bg-blue-50'>
            <div className='h-full w-4/5 mx-auto  p-16 flex flex-col justify-around'>
                <h1 className='font-bold text-3xl'>College Committees</h1>
                <p className='text-2xl pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nulla soluta in eius est similique consequuntur voluptatem ad fugiat, facilis velit reiciendis dolor maiores. Numquam consequatur perspiciatis explicabo esse quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem reiciendis eum quaerat, commodi sit et ut ducimus aut possimus? Debitis repellendus voluptatibus pariatur magni sequi aperiam doloremque porro tempora!</p>

                <div className='w-full text-blue-900 text-xl underline flex p-5'>
                    <div className='w-1/3 flex flex-col gap-5 justify-center items-center'>
                        <a href="Cultural">Cultural</a>
                        <a href="Cultural">Cmc</a>
                        <a href="Cultural">Sports</a>
                        <a href="Cultural">Election</a>
                        <a href="Cultural">Acadamic</a>
                    </div>
                    <div className='w-1/3 flex flex-col gap-5 justify-center items-center'>
                        <a href="Cultural">Press</a>
                        <a href="Cultural">Research</a>
                        <a href="Cultural">Film</a>
                        <a href="Cultural">AI</a>
                        <a href="Cultural">Dance</a>
                    </div>
                    <div className='w-1/3 flex flex-col gap-5 justify-center items-center'>
                        <a href="Cultural">Khelaiya</a>
                        <a href="Cultural">pmmc</a>
                        <a href="Cultural">music</a>
                        <a href="Cultural">chess</a>
                        <a href="Cultural">cubing</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollegeCommittees