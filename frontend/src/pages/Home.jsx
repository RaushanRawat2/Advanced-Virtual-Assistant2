import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const {userData,serverUrl,setUserData}=useContext(userDataContext);
  const navigate = useNavigate();

  const handleLogOut = async ()=>{
    try{
         const result = await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true});
         setUserData(null)
         navigate("/signin")
    }catch(err){
     setUserData(null);
     console.log(err);
     
    }
  }

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[rgb(0,0,0)] to-[#2145b4] flex justify-center items-center flex-col gap-[16px]' >
      <button className="min-w-[150px] h-[60px] bg-blue-200 rounded-full text-[20px] text-blue-950 absolute top-[20px] right-[20px]  cursor-pointer font-semibold shadow-md hover:bg-blue-400 hover:text-white hover:shadow-lg transition duration-300 mt-[30px]" onClick={handleLogOut} >
            Log Out
          </button>
     <button className="min-w-[150px] h-[60px] bg-blue-200 rounded-full text-[20px] text-blue-950 absolute top-[100px] right-[20px] cursor-pointer font-semibold shadow-md hover:bg-blue-400 hover:text-white hover:shadow-lg transition duration-300 mt-[30px] px-[20px] py-[10px]" onClick={()=>navigate("/customize")} >
          Customize your Assistant  
          </button>     

      <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-4xl shadow-lg '>
       <img src={userData?.assistantImage} alt="" className='h-full object-cover  '/>
      </div>
      <h1 className='text-white text-[18px] font-bold'>I'm {userData?.assistantName}</h1>
    </div>
  )
}

export default Home