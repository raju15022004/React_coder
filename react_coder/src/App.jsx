import { useState } from "react";
import College from "./College";
import Student from "./Student";
import User from "./User";
import Wapper from "./Wapper"


function App(){

  const [val,setVal]=useState("Raju")


  // let userName="Raju";
  // let age=29;
  // let email="raju032002@gmail.com"

  // let userObject={
  //   name:"Raju",
  //   age:"29",
  //   email:"raju032004@gmail.com"
  // }

  //  let userObject2={
  //   name:"Raj",
  //   age:"20",
  //   email:"raju032004@gmail.com"
  // }

  // let collegeNames=['IET','DU','IIT','NIT','MIT']

  // const [student ,setStudent]=useState()
  return(
    // <div>

    // <h1>Props in React Js</h1>

    // { student && <Student  name={student}/>}
    // <button onClick={()=>setStudent("Raju")}>Update student name</button>
    // <College name={collegeNames[3]} />

    // {/* <User name={userName} age={age} email={email}/> */}

    // <User user={userObject}/>
    // <User user={userObject2}/>
    // </div>

    // <div>
    //   <h1>Props in React Js</h1>
    //   <Wapper>
    //     <h1>Hello Everyone</h1>
    //   </Wapper>

    //   <Wapper>
    //     <h1>Hello Anil</h1>
    //   </Wapper>

    //   <Wapper>
    //     <h1>Hello Admin</h1>
    //     <h2 style={{color:'red'}}>Please login</h2>
    //   </Wapper>
    // </div>

    // <div>
    //   <h1>Get Input field Value</h1>
    //   <input type="text" value={val} onChange={(even)=> setVal(event.target.value)} placeholder="Enter User Name"  />
    //   <h1>{val}</h1>
    //   <button onClick={()=>setVal("")}>Clear Value</button>
    // </div>

    <div>
      <input type="type value={name} onChange={{event}}" />
    </div>
  )
}

export default App;
