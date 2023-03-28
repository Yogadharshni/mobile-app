import { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Home';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";


function App() {
 
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobile" element={
        <ProtectedRoute>
      <PhoneList />
      </ProtectedRoute>
      } />
    </Routes>
  </div>
  
  )
}


function checkauth(res){
  if(res.statusCode === 401){
    throw error("unathorized")
  }
   else{
    return res.json()
   }
}
function Logout(){
  localStorage.clear()
  //localStorage.removeItem("token")
  window.location.href ="/"
}

function ProtectedRoute({children}){
  const token=localStorage.getItem('token');
  return token? 
    (<section>
      <h1>This is a Protected Route </h1>
      {children}
    </section>
  ):
  (
    <Navigate replace to='/'/>
  )
}

function PhoneList(){
  const [mobiledata,setMobile]=useState([])

useEffect(()=>{
  fetch('http://localhost:4000/mobile',{
    headers: { "x-auth-token" :localStorage.getItem("token") },
  })
  .then(res=>checkauth(res))
  .then(data=>setMobile(data))
  .catch(err=>Logout())
},[])

  const navigate=useNavigate()
return(
  <div className='phone-list-container'>
    <div className="logout">
      <Button onClick={()=>{
        localStorage.clear()
        navigate('/')
      }}variant="contained">Logout</Button>
    </div>
  { mobiledata.map((mbl,index)=>(
  <Phone mobile={mbl} key={index}/> 
  )) }
  </div>
 
)
}

function Phone({mobile}){
 
  return(
    <div className="phone-container">
    
      <img className='phone-picture' src={mobile.img} alt={mobile.model}/ >
      <h1 className='phone-name '>{mobile.model}</h1>
        <p className='phone-company'>{mobile.company}</p>
    </div>
  )
}

export default App
