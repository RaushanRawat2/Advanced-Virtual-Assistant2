import React, { createContext, useEffect ,useState} from 'react'
import axios from "axios"
export const userDataContext = createContext();

function UserContext({children}) {
    const serverUrl = "https://advanced-virtual-assistant-backend.onrender.com";
    const [userData,setUserData] = useState(null);
    const [frontendImage,SetFrontendImage]= useState(null);
    const [backendImage,setBackendImage]= useState(null);
    const [selectedImage,setSelectedImage]= useState(null)

    const handleCurrentUser = async ()=>{
      try{
         const result = await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true});
         setUserData(result.data);
         console.log(result.data);
         
      }catch(error){
         console.log(error);
         
      }
    }
// fetching gemini response from the backend

    const getGeminiResponse= async (command)=>{
      try{
           const result = await axios.post(`${serverUrl}/api/user/asktoassistant`,{command},{withCredentials:true})
           return result.data;
      }catch(err){
        console.log(err);
        
      }
    }
     
    useEffect(()=>{
      handleCurrentUser()
    },[])

    const value ={
        serverUrl,userData,setUserData,frontendImage,SetFrontendImage,backendImage,setBackendImage,
        selectedImage,setSelectedImage,getGeminiResponse
    }
  return (
  <div>
    <userDataContext.Provider value={value}>
        {children}
    </userDataContext.Provider>
      
  </div>
  )
}

export default UserContext
