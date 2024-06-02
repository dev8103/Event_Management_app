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

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/create' element={<CreateEvent/>}/>
          <Route path='/allevent' element={<AllEventList/>}/>
          <Route path='/delete' element={<DeletePopUp/>}/>
          <Route path='/*' element={<NoPage/>}/>
        </Routes>
      </Router>
    </MyState>
  )
}

export default App