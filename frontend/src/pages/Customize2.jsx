import React from 'react'

const Customize2 = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[rgb(0,0,0)] to-[#8da5ec] flex justify-center items-center flex-col'>
       <h1 className='text-white text-[30px] text-center mb-[30px] font-sans font-bold'>Enter Your <span className='text-[33px] text-blue-300 font-bold'>Assistant Name</span></h1>
        
          <input
            type="text"
            placeholder="Enter your Assistant Name"
            className="w-full max-w-[600px] h-[60px] outline-none border-2 border-amber-600 bg-transparent text-white placeholder-gray-400 px-[30px] py-[10px] rounded-full text-[22px]"
            required 
          />
          <button className="min-w-[300px] h-[60px] bg-blue-400 rounded-full text-[20px] text-white cursor-pointer font-semibold shadow-md hover:bg-blue-600 hover:border-[2px] hover:text-white hover:shadow-lg transition duration-300 mt-[30px] " onClick={()=>navigate("/customize2")}>Finally Create Your Assistant</button>
    </div>
  )
}

export default Customize2