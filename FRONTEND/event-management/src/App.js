import React from 'react'
import MyState from './context/data/MyState'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
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
function App() {

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/create' element={<CreateEvent/>}/>
          <Route path='/allevents' element={<AllEventList/>}/>
          <Route path='/deletepopup' element={<DeletePopUp/>}/>
          <Route path='/eventdetails' element={<EventDetails/>}/>
          <Route path='/collegecommittee' element={<CollegeCommittees/>}/>
          <Route path='/committeedetail' element={<CommitteeDetails/>}/>
          <Route path='/admineventlist' element={<AdminEventlist/>}/>
          <Route path='/editevent' element={<EditEvent/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/*' element={<NoPage/>}/>
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  )
}

export default App