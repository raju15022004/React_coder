import { useState } from "react";
// import Clock from "./Clock";
import Counter1 from "./Counter1"; 



function App(){
//  const [counter,setCounter]=useState(0)
//  function callOnce(){
//   console.log("callOnce function called");
//  }

//  callOnce();
  return(

  <div>
   {/* <h1>useEffect Hook</h1> */}
   {/* <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button> */}
   <Counter1 />
  </div>
  )
}

export default App;
