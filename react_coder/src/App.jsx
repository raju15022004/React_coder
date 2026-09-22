// import {Routes,Route, NavLink} from 'react-router'
import { useState } from 'react';
import './App.css'



function App() {

  const [name,setName]=useState('');
  const [nameErr,setNameErr]=useState();

  const [password,setPassword]=useState('');
  const [passErr,setPassErr]=useState();

  const handleName=(event)=>{
    console.log(event.target.value);
    if(event.target.value.length>5){
     setNameErr("Please enter valid username. only 5 characters allowed")
    }else{
      setNameErr()
    }
  }

  const handlPassword=(event)=>{
    let regex=/^[A-Z0-9]+$/i;
    if(regex.test (event.target.value)){
      setPassErr()
    }else{
     setPassErr("Please enter valid password. only number and alphabets allowed")

    }
  }

  return (
<div>
<input className={nameErr?'error':''} type='text' onChange={handleName} placeholder='enter name'/>
<span className='red-color'>{nameErr && nameErr}</span>
<br/><br/>
<input className={passErr?'error':''}  type="text"  onChange={handlPassword} placeholder='enter password' />
<span className='red-color'>{passErr && passErr}</span>
<br/><br/>
<button disabled={passErr || nameErr}>Login</button>
</div>
  );
}

export default App;
