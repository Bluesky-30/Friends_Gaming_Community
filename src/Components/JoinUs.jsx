import React from 'react'
import { Link } from 'react-router-dom'

function JoinUs() {
  return (
    <>  
        <div className='w-full h-[130vh] flex items-start flex-col md:flex-row  bg-[#0d1013]'>
       <div className='realtive md:w-[50%] w-full h-full flex flex-col'>
        <div className='absolute md:top-[10%] top-[5%] md:left-[5%] left-[2%] flex flex-col h-full'>
          <h1 className='text-white md:text-7xl text-4xl my-4 font-extrabold'>Friends <br />Gaming <br /> Community</h1>
          <h3 className='text-[#04FBFF] md:text-3xl text-2xl font-bold'> Together we are stronger</h3>
        </div>
        <img src="./Neymar2.jpg" alt="Messi" className='w-[100%] h-full object-cover'/>
      </div>

      <div className={`loginBox md:w-[50%] w-[90%] mx-auto h-full flex flex-col p-18 justify-center items-center mb-8   bg-[#111318] `}>
        <h1 className='w-full flex justify-center text-white text-3xl font-bold mb-8'>Welcome</h1>
        <div className='w-full flex flex-col md:max-w-[500px]  bg-[#111315] rounded-lg'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3xl font-semibold mb-2 text-white'>Register</h3>
            <p className='text-base mb-2 text-white'> Please enter your details</p>
          </div>

          <div className='w-full flex flex-col'>
            <input 
            className='w-full text-white border-b border-white focus:outline-none py-2 bg-transparent my-4'
            placeholder='Your Name'
            type="text" />

            <input 
            className='w-full text-white border-b border-white focus:outline-none py-2 bg-transparent my-4'
            placeholder='Email'
            type="email" />

            <input 
            className='w-full text-white border-b border-white focus:outline-none py-2 bg-transparent my-4'
            placeholder='Type Password'
            type="text" />

            <input 
            className='w-full text-white border-b border-white focus:outline-none py-2 bg-transparent my-4'
            placeholder='Confirm Password'
            type="password" />
          </div>


          <div className='w-full flex flex-col my-4'>
    
            <button className='w-full bg-red-500 rounded-md text-center p-4  font-semibold flex items-center justify-center text-white my-2
            hover:bg-red-800'>
            Register
            </button>
          </div>

          <div className='w-full flex items-center justify-center relative py-2'>
            <div className='w-full h-[1px] bg-white'></div>
            <p className='text-lg text-white/80 absolute bg-[#111318]'>or</p>
          </div>
          <div className='w-full bg-[#f0e4e4] rounded-md text-center p-4 font-semibold flex items-center justify-center text-black
          border border-black-80 my-2 cursor-pointer hover:bg-red-200 mt-5'>
            <img src="./google.png" className='h-6 mr-2' />
              Register with Google
            </div>
          
        </div>

      </div>

      
     
      
    </div>
    </>
  )
}

export default JoinUs