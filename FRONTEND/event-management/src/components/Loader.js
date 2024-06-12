import { Box, CircularProgress } from '@mui/material'
import React from 'react'


function Loader() {
  return (
    <div>
        <div className='h-screen w-full flex flex-col justify-center items-center text-2xl font-bold'>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>             
        </div>
    </div>
  )
}

export default Loader