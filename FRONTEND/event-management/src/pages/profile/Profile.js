import React, { useEffect, useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { getRequestWithToken, postRequest, postRequestWithToken } from '../../services/Api';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';

function Profile() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [phone,setPhone]=useState("");
  const [state,setState]=useState("");
  const [gender,setGender]=useState("");
  const [userData, setUserData] = useState();
  // const [loading,setLoading]=useState(false);
  const updateUserData={
      name:name||userData?.name,
      username:username||userData?.username,
      email:email||userData?.email,
      phone:phone||userData?.phoneNumber,
  }
  
  const [isLoading, setIsLoading] = useState(true);

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
  useEffect(()=>{
    const fun = async () => {

      const res = await getRequestWithToken("student/profile");
      
      if(res.status == 200){
        console.log(res.data);
        setUserData(res.data);
        setIsLoading(false);
      }
    }
    fun()
  }, [])

  return (
    <>
    {

    isLoading ? 
      <Loader />
    :
    <div>
       <div className='h-full gap-2'>
            <div className='xl:flex h-full xl:w-3/5 mx-auto p-3'>
                <div className='xl:w-2/5 h-1/2 xl:mr-2 my-2 shadow-lg rounded-lg'>
                    <div className='w-full rounded-t-lg flex justify-center items-center'>
                        <img 
                        // src="/assets/train-img3.webp" 
                        alt="" className='h-72 p-2'/>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center py-3'>
                        <h1 className='font-bold text-lg'>
                          {/* {formData?.gender=="female"?"Miss.":"Mr."}{formData?.firstname} */}
                        </h1>
                        <h2>
                          {username}
                        </h2>
                        <h3>
                          {/* {email} */}
                        </h3>
                        <h3>
                          {phone}
                        </h3>
                    </div>
                </div>
                <div className='xl:w-3/5 flex flex-col p-3 my-2 shadow-lg h-full rounded-lg outline-none border-0'>
                    <h1 className='text-2xl font-bold'>Profile</h1>
                    <form action="" className='flex flex-col gap-3 my-2 relative outline-none  border-none'>
                        <input 
                        value={updateUserData?.name}
                        onChange={(e)=>setName(e.target.value)}
                        // value={formData?.firstname} onChange={(e)=>setFormData({...formData,firstname:e.target.value})} 
                        placeholder="firstname" type="text" className='rounded-lg p-3'/>
                        <input 
                        value={updateUserData?.username}
                        onChange={(e)=>setUsername(e.target.value)}
                        // value={formData?.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} 
                        placeholder="username" type="text" className='rounded-lg p-3'/>
                        <input 
                        value={updateUserData?.email}
                        // value={formData?.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} 
                        placeholder="email" type="email" className='rounded-lg p-3'/>
                        {/* <FormLabel id="demo-row-radio-buttons-group-label"><p className='font-bold text-black'>Gender</p></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={updateUserData?.gender}
                                onChange={(e)=>setGender(e.target.value)}
                                className='px-3'
                                // value={gender}
                                // value={formData?.gender}   
                                // onChange={(e)=>setFormData({...formData,gender:e.target.value})}
                            >
                                <FormControlLabel value="male" 
                                // checked={formData?.gender=="male"}  
                                control={<Radio />} label="Male" />
                                <FormControlLabel value="female" 
                                // checked={formData?.gender=="female"}  
                                control={<Radio />} label="Female" />
                                <FormControlLabel value="other" 
                                // checked={formData?.gender=="other"}  
                                control={<Radio />} label="Other" />
                            </RadioGroup>
                        <label htmlFor="dob" className='font-bold'>Date Of Birth</label>
                        <input type="date" 
                        // value={formData?.dob} onChange={(e)=>setFormData({...formData,dob:e.target.value})}  
                        className='border-1 border-gray-300 py-1 px-2 rounded-sm outline-none'/> */}
                        <input 
                        value={updateUserData?.phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        // value={formData?.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})} 
                        label="phone number" type="text" placeholder='phone number' className='rounded-lg p-3'/>
                        {/* <label htmlFor="state" className='font-bold'>State</label>
                        <select name="state" 
                        value={updateUserData?.state}
                        onChange={(e)=>setState(e.target.value)}
                        // value={formData?.state} onChange={(e)=>setFormData({...formData,state:e.target.value})} 
                        className='border-1 border-gray-500 p-3 rounded-md outline-none'>
                            <option value="Gujarat" name="state">Gujarat</option>
                            <option value="Goa" name="state">Goa</option>
                            <option value="Tamilnadu" name="state">Tamilnadu</option>
                            <option value="Delhi" name="state">Delhi</option>
                            <option value="Kerala" name="state">Kerala</option>
                            <option value="Punjab" name="state">Punjab</option>
                            <option value="Rajasthan" name="state">Rajasthan</option>
                            <option value="Haryana" name="state">Haryana</option>
                            <option value="Orissa" name="state">Orissa</option>
                            <option value="Jammu And Kashmir" name="state">Jammu And Kashmir</option>
                        </select> */}
                        <button className='btn bg-blue-900 text-white hover:bg-blue-950 xl:w-1/5 mx-auto' 
                        onClick={updateUser}
                        >Update</button>
                    </form>
                </div>
            </div>
            <div className='flex justify-center pt-20 pb-5'>
                <button className='btn btn-danger px-4' 
                // onClick={logout}
                >Log out</button>
            </div>
        </div>
    </div>
  }
  </>
  )
}

export default Profile