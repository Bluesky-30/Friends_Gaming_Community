import React from 'react'

function About() {
    return (
        <div className="py-16 bg-[#0d1013]">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12 shadow-sm shadow-lime-50 z-[1]">
                        <img
                            src="./aboutSection.jpg"
                            alt="image"
                            className=' rounded-lg'
                        />
                    </div>
                    <div className="md:7/12 lg:w-7/12 border border-white shadow-md shadow-white rounded-lg p-8 ">
                        <h2 className="text-2xl text-white font-bold md:text-4xl">
                            Friends Gaming Community
                        </h2>
                        <p className="mt-6 text-white">
                        WELCOME TO FRIENDS GAMING COMMUNITY, where our motto is “TOGETHER WE ARE STRONGER.” More than an esports crew, we are a family that values every member, ensuring that no one under our roof ever feels left out. By joining us, you will not only participate in top local , National and international tournaments but also gain access to our exclusive merchandise and become part of a supportive community that celebrates your highs and stands by you during your lows. 
                        </p>
                        <p className="mt-4 text-white">
                        By joining us, you will not only participate in top local , National and international tournaments but also gain access to our exclusive merchandise and become part of a supportive community that celebrates your highs and stands by you during your lows. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 p-10 mt-5 mb-3 place-items-center  border-b'>
          <div className='h-[150px] w-[200px] bg-[#18b5c9] flex items-center justify-center rounded-xl'>
            <span className='text-black text-3xl font-bold text-center'>175+ <br />Wins</span>
          </div>

          <div className='h-[150px] w-[200px]  bg-[#2bc5d9] flex items-center justify-center rounded-xl'>
            <span className='text-black text-3xl font-bold text-center'>250+ <br />Tournaments</span>
          </div>

          <div className='h-[150px] w-[200px] bg-[#3fd7eb] flex items-center justify-center rounded-xl'>
            <span className='text-black text-3xl font-bold text-center'>500+ <br />Gamers</span>
          </div>

          <div className='h-[150px] w-[200px] bg-[#54def0] flex items-center justify-center rounded-xl'>
            <span className='text-black text-3xl font-bold text-center'>Frequently<br />LAN</span>
          </div>

          <div className='h-[150px] w-[200px] bg-[#57ecff] flex items-center justify-center rounded-xl'>
            <span className='text-black text-3xl font-bold text-center'>Lorem <br />ipsum</span>
          </div>

            </div>
        </div>
    );
}

export default About