import React from 'react'
import "./App.css"
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import CreateContact from './Pages/CreateContact'
import EditContact from './Pages/EditContact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contact from './Components/Contact'
import Detail from './Pages/Detail'

const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Dashboard/>}/> */}
      <Route path='/' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/create' element={<CreateContact/>}/>
      <Route path='/edit/:id' element={<EditContact/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
  )
}

export default App
