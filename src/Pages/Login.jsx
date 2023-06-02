import React, { useState } from 'react'

import {RiLoginBoxFill} from 'react-icons/ri'
// import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../api/authApi'

const Login = () => {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 //const [login] = useLoginMutation()
 const [login]=useLoginMutation();
 const nav = useNavigate()
 const loginHandler = async(e) => {
  try {
    e.preventDefault()
  const user = {email,password}
  const {data} = await login(user)
  console.log(data)
  if(data?.success) nav('/')
  } catch (error) {
    console.log(error)
  }
 }
    
  return (
    <div className=''>
     
      <div className='p-6 items-center bg-gray-100 shadow-lg h-screen'>
      <form className='w-96 flex flex-col   mx-auto  gap-6 shadow-lg p-7' onSubmit={loginHandler}   action="">
      <div className=' gap-2 flex justify-center items-center pb-[50px]'>
        <RiLoginBoxFill className='text-2xl text-secondary'/>
        <p className='font-bold text-secondary  text-2xl '>Login</p>
        </div>
        <hr className='border border-primary ' />
        <div >
        
        <div className='flex flex-col gap-4 '>
        <input value={email} onChange={e=> setEmail(e.target.value)} className='input  border-primary px-12 ' type="text" name="" id="" placeholder='Your Emial Address' />
        <input value={password} onChange={e=> setPassword(e.target.value)} className='input  border-primary px-12 '  type="text" name="" id="" placeholder='Enter Your Password' />
        
        </div>
        <a
        className="inline-block align-baseline font-bold text-sm text-black mt-3 hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
        <div className='flex gap-3 p-6 '>
            <button className='  px-12 register rounded py-2 text-white bg-secondary hover:bg-primary'>Login</button>
            <Link to={'/register'}>
            <button className='px-12 py-2 login rounded text-white bg-red-500 hover:bg-red-700'>Logout</button>
            </Link>
        </div>
        </div>
      </form>
      </div>
      </div>
      
  )
}

export default Login