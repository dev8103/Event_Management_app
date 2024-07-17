import React from 'react'
import MyState from './context/data/MyState'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/registration/Login'
import SignUp from './pages/registration/SignUp'
import NoPage from './pages/nopage/NoPage'
import CreateEvent from './pages/event/CreateEvent'
import AllEventList from './pages/event/AllEventList'
import DeletePopUp from './pages/event/DeletePopUp'
import EventDetails from './pages/event/EventDetails'
import CollegeCommittees from './pages/committee/CollegeCommittees'
import CommitteeDetails from './pages/committee/CommitteeDetails'
import Profile from './pages/profile/Profile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminEventlist from './pages/event/AdminEventlist'
import EditEvent from './pages/event/EditEvent'
import Loader from './components/Loader'
import EventCal from './pages/event/EventCal'
import MobileAuth from './pages/registration/MobileAuth'
import CodeVerification from './pages/registration/CodeVerification'
import SuccesMessage from './pages/registration/SuccesMessage'
import RegistrationFacility from './pages/event/RegistrationFacility'
import CreateCommittee from './pages/committee/CreateCommittee'
import UpdateCommittee from './pages/committee/UpdateCommittee'
import DeleteCommittee from './pages/committee/DeleteCommittee'
import ForgotPass from './pages/registration/ForgotPass'
import UpdatePassVerify from './pages/registration/UpdatePassVerify'
function App() {

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/forgotpass' element={<ForgotPass/>}/>
          <Route path='/updatepassverify' element={<UpdatePassVerify/>}/>
          <Route path='/create' element={
            <ProtectedRouteForCommittee>
              <CreateEvent/>
            </ProtectedRouteForCommittee>
            }/>
          <Route path='/allevents' element={<AllEventList/>}/>
          <Route path='/deletepopup' element={<DeletePopUp/>}/>
          <Route path='/eventdetails' element={<EventDetails/>}/>
          <Route path='/collegecommittee' element={<CollegeCommittees/>}/>
          <Route path='/committeedetails' element={<CommitteeDetails/>}/>
          <Route path='/createcommittee' element={<CreateCommittee/>}/>
          <Route path='/updatecc' element={<UpdateCommittee/>}/>
          <Route path='/deletecc' element={<DeleteCommittee/>}/>
          <Route path='/admineventlist' element={
            <ProtectedRouteForCommittee>
              <AdminEventlist/>
            </ProtectedRouteForCommittee>
          }/>
          <Route path='/editevent' element={
            <ProtectedRouteForCommittee>
              <EditEvent/>
            </ProtectedRouteForCommittee>
          }/>
          <Route path='/profile' element={
            <ProtectedRouteForStudent>
              <Profile/>
            </ProtectedRouteForStudent>
          }/>
          <Route path='/loader' element={<Loader/>}/>
          <Route path='/eventcal' element={<EventCal/>}/>
          <Route path='/mobileauth' element={<MobileAuth/>}/>
          <Route path='/codeverification' element={<CodeVerification/>}/>
          <Route path='/successmessage' element={<SuccesMessage/>}/>
          <Route path='/regfacility' element={<RegistrationFacility/>}/>
          <Route path='/*' element={<NoPage/>}/>
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  )
}

export default App

// Protected Route For Student
export const ProtectedRouteForStudent = ({children}) =>{

  const value = localStorage?.getItem('type');
  const type = JSON.parse(value) || ""; // For the object we can use json.parse

  if(type === "student"){
        return children
    }else{
        return <Navigate to={'/login'}/>
    }
}

// Protected Route For Sbg
export const ProtectedRouteForSbg = ({children}) =>{
    const type = JSON.parse(localStorage?.getItem('type')) || "";
    if(type === "sbg"){
      return children
    }else{
      return <Navigate to={'/login'}/>
    }
}

export const ProtectedRouteForCommittee = ({children}) =>{
  const type = JSON.parse(localStorage?.getItem('type')) || "";
  if(type === "cc"){
        return children
    }else{
        return <Navigate to={'/login'}/>
    }
}