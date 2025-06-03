import React from 'react'
import AI1 from '../assets/AI1.jpg'
import AI3 from '../assets/AI3.jpg'
import AI4 from '../assets/AI4.png'
import AI5 from '../assets/AI5.avif'
import AI6 from '../assets/AI6.avif'
import AI7 from '../assets/AI7.jpg'
import Card from '../assets/components/Card'


const Customize = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[rgb(0,0,0)] to-[#8da5ec] flex justify-center items-center flex-col'>
        <div className='w-[90%] max-w-[60%] flex justify-center items-center flex-wrap'><Card image={AI1}/></div>
    </div>
  )
}

export default Customize