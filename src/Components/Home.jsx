import React from 'react'
import { Link } from 'react-router-dom';
import { CarouselCustomArrows } from './CarouselCustomArrows';
import Styletext from './Styletext/Styletext';
// import {Styletext} from './Styletext/Styletext.jsx';

function Home() {
    return (
        <div className="w-full h-[350vh] sm:h-[380vh]  bg-[#0d1013]">
           {/* Hero Section  */}
            <section className='w-[100%] sm:h-[100vh] z-[1]'>
                <img src="../../public/Mesiiiiiii.jpg" alt="Messi"
                className=' object-cover w-full h-[1/2] sm:h-full absolute mix-blend-screen' />
                
                
                <div className='relative text-white flex flex-col  '>
                    <h1 className='sm:mt-[2%] sm:mr-[8%] p-4 flex justify-start sm:justify-end text-3xl sm:text-6xl font-extrabold'>
                        Friends<br/> Gaming<br/> Community
                    </h1>
                    
                    <h2 className=' sm:mr-[4%] p-4  sm:text-3xl font-bold flex justify-start sm:justify-end'>
                    <Styletext />
                    </h2>
                    
                </div>
            </section>

            {/* Join us Section */}

            <div className=' w-[90%] sm:w-[80%] flex flex-col  sm:flex-row  mt-[80px] mx-auto   hover:rounded-md 
            hover:border hover:bg-[#0d1003] cursor-pointer transition duration-700 hover:scale-95 '>
                <div className='w-[100%] sm:w-[50%] p-4'>
                    <img src="../../public/about_img.png" alt="about-img" 
                    className='w-full h-full object-cover'/>
                </div>
                <div className='w-[100%] sm:w-[50%] p-4 '>
                    <h1 className='text-white text-6xl'>
                        Join Us :
                    </h1>
                    <p className='text-white mt-4 text-2xl text-justify'>
                     Our impressive track record includes championships like the Bengal Super League, Federation Cup, NVS Cup, Independence Cup (LAN), and many more, reflecting our dedication and skill. We recognize the potential in everyone and nurture them to grow continually. Regular intra-crew solo and group tournaments foster healthy competition and fun among players. With mutual respect and inclusivity at our core, our goal is to become India’s premier esports crew. Join us and be part of a family dedicated to playing, growing, and succeeding together.
                    </p>
                </div>
            </div>

            {/* Franchise Section */}
            <div className='w-full  mt-[80px]'>
                <div className='w-[80%] flex flex-col gap-8 sm:flex-row mx-auto justify-center  sm:justify-between text-white'>
                
                <div className="sm:w-[370px] sm:h-[500px] w-[270px] h-[350px] mx-auto rounded-md border transition duration-500 hover:scale-110 cursor-pointer">
                    <img
                        src="/public/firstFran.jpg"
                        alt="Laptop"
                        className="h-[50%] w-full rounded-md"
                    />
                <div class="p-4">
                <h1 class="text-3xl font-bold justify-center flex">TEAM FGC</h1>
                <p class="mt-3 text-xs sm:text-lg text-justify ">
                THE FRONTLINERS OF FGC CLUB. THIS FRANCHISE MAINTAINS THE INCREDIBLE PERFORMANCE TO HOLD THE HERITAGE OF FGC.
                </p>
                <div className='w-full flex justify-center'>
                <button
                type="button"
                className=" mt-3 sm:mt-4 rounded-sm bg-white px-2.5 py-1 text-[10px] font-semibold text-black shadow-sm hover:bg-gray-200        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray text-xs "
                >
                    View Team
                </button>
                </div>
            </div>
                </div>

                <div className="sm:w-[370px] sm:h-[500px] w-[270px] h-[350px] mx-auto  rounded-md border transition duration-500 hover:scale-110 cursor-pointer">
                    <img
                        src="/public/secondFran.jpg"
                        alt="Laptop"
                        className="h-[50%] w-full rounded-md"
                    />
                <div class="p-4">
                <h1 class="text-3xl font-bold justify-center flex">DOMINATORS</h1>
                <p class="mt-3 text-xs sm:text-lg text-justify">
                OFFICIALLY SECOND FRANCHISE OF FGC.THIS FRANCHISE BROUGHT SOME INCREDIBLE PERFORMANCE. 
                </p>
                <div className='w-full flex justify-center'>
                <button
                type="button"
                className="mt-3 sm:mt-4 rounded-sm bg-white px-2.5 py-1 text-[10px] font-semibold text-black shadow-sm hover:bg-gray-200        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray text-xs "
                >
                    View Team
                </button>
                </div>
            </div>
                </div>

                <div className="sm:w-[370px] sm:h-[500px] w-[270px] h-[380px] mx-auto  rounded-md border transition duration-500 hover:scale-110 cursor-pointer">
                    <img
                        src="/public/thirdFran.jpg"
                        alt="Laptop"
                        className="h-[50%] w-full rounded-md"
                    />
                <div class="p-4">
                <h1 class="text-3xl font-bold justify-center flex">NIGHTMARES</h1>
                <p class="mt-3 text-xs sm:text-sm text-justify ">
                OFFICIALLY THIRD FRANCHISE OF FGC.WHICH ALWAYS MAINTAIN ITS STANDARD AND FOCOUS ON THE PROGRESS OF JUNIOR PLAYERS TO IMPROVE THEIR PERFORMANCE. 
                </p>
                <div className='w-full flex justify-center'>
                <button
                type="button"
                className="mt-3 sm:mt-4 rounded-sm bg-white px-2.5 py-1 text-[10px] font-semibold text-black shadow-sm hover:bg-gray-200        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray text-xs "
                >
                    View Team
                </button>
                </div>
            </div>
                </div>

                </div>

            </div>

            
            <div className='w-[80%] h-[200px] sm:w-[900px] sm:h-[500px] mt-[50px] sm:mt-[100px] mx-auto
             shadow-white shadow-md flex rounded-xl'>
                <CarouselCustomArrows /> 
            </div>

            <div className='w-full mt-4 sm:mt-8 flex justify-center'>
                <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 p-4 rounded-md w-[40%] sm:w-[20%] text-sm sm:text-2xl font-bold'>
                    Achievements
                </button>
            </div>

         
            

            
        </div>
    );
}

export default Home