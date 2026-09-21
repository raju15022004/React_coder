import { useEffect, useState } from "react";
import {useParams} from "react-router";

function UserEdit(){
  const {id}=useParams();
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [email,setEmail]=useState('')


  useEffect(()=>{
    getUserData()
  },[])

  const getUserData=async()=>{
    const url="http://localhost:3000/users/"+id;
    let response=await fetch(url);
    response =await response.json();

    console.log(response);
    setName(response.name)
    setAge(response.age)
    setEmail(response.email)
  }

  return(
    <div style={{textAlign:'center'}}>
      <h1>Edit User Details </h1>
      <input type="text" value={name} placeholder="user name"/>
      <br/><br/>
      <input type="text" value={age} placeholder="user age"/>
      <br/><br/>
      <input type="text" value={email} placeholder="user email"/>
      <br/><br/>
      <button >Update User</button>
    </div>
  )
}

export default UserEdit;
