import React, { useEffect, useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { getRequestWithToken, postRequest, postRequestWithToken } from '../../services/Api';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';


//  remove overlap with value and label use ""
//  overlap -----> value={updateUserData?.name}
//  not ovelap -----> value={updateUserData?.name||""}

function Profile() {
  
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [phone,setPhone]=useState("");
  const [userData, setUserData] = useState();

  // updateinfo
  const updateUserData={
      name:name||userData?.name,
      username:username||userData?.username,
      email:email||userData?.email,
      phone:phone||userData?.phoneNumber,
  }

  // update
  const updateUser=async(e)=>{
      e.preventDefault();
      console.log(updateUserData);
      const res = await postRequestWithToken(`student/updateprofile/${userData._id}`,updateUserData);
      if(res.status==200){
        toast.success("Your Profile Has Succesfully Updated");
      }else{
        toast.error("Something Went Wrong!");
      }
  }

  // logout
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear('user');
    localStorage.clear('type');
    navigate('/login');
  }

  useEffect(()=>{
    const fun = async () => {
      const res = await getRequestWithToken("student/profile");
      if(res.status == 200){
        console.log(res.data);
        setUserData(res.data);
      }
    }
    fun()
  }, [])

  return (
    <Layout>
      <div>
        <div className='h-screen'>
              <div className='xl:flex h-2/3 xl:w-3/5 justify-center mx-auto p-3 items-center'>

                  <div className='xl:w-3/5 flex flex-col p-3 my-2 shadow-lg h-full rounded-lg outline-none border-0'>

                      <h1 className='text-2xl font-bold text-center'>Profile</h1>
                      
                      {/* profile details */}
                      <form action="" className='flex flex-col gap-3 m-3 relative outline-none  border-none'>
                          <TextField
                              type="text" 
                              id="outlined-controlled"
                              label="Name"
                              value={updateUserData?.name||''}
                              onChange={(e)=>setName(e.target.value)}
                              />
                          <TextField
                              type="text" 
                              id="outlined-controlled"
                              label="Username"
                              value={updateUserData?.username||""}
                              onChange={(e)=>setUsername(e.target.value)}
                              />
                          <TextField
                              type="email" 
                              id="outlined-controlled"
                              label="Email"
                              value={updateUserData?.email||""}
                              />
                          <TextField
                              type="text" 
                              id="outlined-controlled"
                              label="Phone Number"
                              value={updateUserData?.phone||""}
                              onChange={(e)=>setPhone(e.target.value)}
                              />

                          {/* button */}
                          <div className='flex justify-center gap-3'>
                            <button className='btn bg-blue-900 text-white hover:bg-blue-950 w-1/4' 
                              onClick={updateUser}
                            >Update</button>

                            <button className='btn btn-danger px-4 w-1/4' 
                              onClick={()=>logout()}
                            >Log out</button>
                          </div>
                      </form>
                  </div>
              </div>
              
          </div>
      </div>
    </Layout>
  )
}

export default Profile