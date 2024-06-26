import React from 'react'
import MyState from './context/data/MyState'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/registration/Login'
import SignUp from './pages/registration/SignUp'
import NoPage from './pages/nopage/NoPage'
import CreateEvent from './pages/event/CreateEvent'
import AllEventList from './pages/event/AllEventList'
import DeletePopUp from './components/popup/DeletePopUp'
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
function App() {

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/create' element={
            <ProtectedRouteForCommittee>
              <CreateEvent/>
            </ProtectedRouteForCommittee>
            }/>
          <Route path='/allevents' element={<AllEventList/>}/>
          <Route path='/deletepopup' element={<DeletePopUp/>}/>
          <Route path='/eventdetails' element={<EventDetails/>}/>
          <Route path='/collegecommittee' element={<CollegeCommittees/>}/>
          <Route path='/committeedetail' element={<CommitteeDetails/>}/>
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
          <Route path='/profile' element={<Profile/>}/>
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
  // const admin = JSON.parse(localStorage?.getItem('user') || ""); // For the object we use JSON.parse
  const type = JSON.parse(localStorage?.getItem('type') || "")
  if(type === "student"){
        return children
    }else{
        return <Navigate to={'/login'}/>
    }
}

// Protected Route For Sbg
export const ProtectedRouteForSbg = ({children}) =>{
    // const admin = JSON.parse(localStorage?.getItem('user') || ""); // For the object we use JSON.parse
    const type = JSON.parse(localStorage?.getItem('type') || "")
    if(type === "sbg"){
      return children
    }else{
      return <Navigate to={'/login'}/>
    }
}

export const ProtectedRouteForCommittee = ({children}) =>{
  // const admin = JSON.parse(localStorage?.getItem('user') || ""); // For the object we use JSON.parse
  const type = JSON.parse(localStorage?.getItem('type') || "")
  if(type === "cc"){
        return children
    }else{
        return <Navigate to={'/login'}/>
    }
}