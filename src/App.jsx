import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' bg-[#efe526ee] text-white flex justify-center 
        align-middle w-full max-w-[500px] mx-auto my-[200px] flex-col'>
        <h1 className='flex w-[1/2] p-[40px] bg-red-500 border border-red-500 m-4 rounded-md
         cursor-pointer justify-center'>React Router Demo</h1>

        <h1 className='flex w-[1/2] p-[40px] bg-red-500 border border-red-500 m-4 rounded-md
         cursor-pointer justify-center'>Home</h1>

        <h1 className='flex w-[1/2] p-[40px] bg-red-500 border border-red-500 m-4 rounded-md
         cursor-pointer justify-center'>About</h1>

        <h1 className='flex w-[1/2] p-[40px] bg-red-500 border border-red-500 m-4 rounded-md
         cursor-pointer justify-center'>Contact</h1>
      </div>
        
    </>
  )
}

export default App
