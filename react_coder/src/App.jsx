import { useEffect, useState } from "react";
import './App.css'


function App() {
  const [usersData,setUserData]=useState([]);
  useEffect(()=>{
    getUsersData();
  },[])

  const  getUsersData=async()=> {
    const url="http://localhost:3000/users";
    let response=await fetch(url);
     response=await response.json();
     console.log(usersData);

     setUserData(response);

  }


  return (
<div>
  <h1 >Integrate JSON server API and Loader</h1>

  {
    usersData.map((user)=>{
  return <ul className="user-list">
    <li>{user.name}</li>
    <li>{user.age}</li>
    <li>{user.email}</li>
  </ul>
})
  }
</div>
  );
}

export default App;
