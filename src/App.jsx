import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="App">
<PhoneList/>
    </div>
  )
}



function PhoneList(){
  const [mobiledata,setMobile]=useState([])

useEffect(()=>{
  fetch('http://localhost:4000/mobile')
  .then(res=>res.json())
  .then(data=>setMobile(data))
},[])
  
return(
  <div className='phone-list-container'>
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
