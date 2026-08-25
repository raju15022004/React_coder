import { useState } from "react";
import Clock from "./Clock";



function App(){
 const[color,setColor]=useState('red');
  return(

  <div>
<h1>Digital Clock in React js React Js</h1>
<select onChange={(event)=>setColor(event.target.value)}>
  <option value={"red"}>Red</option>
  <option value={"blue"}>Blue</option>
  <option value={"green"}>Green</option>
  <option value={"orange"}>Orange</option>
</select>
<Clock  color={color} />
  </div>
  )
}

export default App;
