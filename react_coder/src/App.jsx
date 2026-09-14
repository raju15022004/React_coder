import { useState } from "react";

function App(){
const [name,setName]=useState("Raju")
  return(
  <div>
  <h1>Updating Array in State</h1>
  <h2>{name}</h2>
  <button onClick={()=>setName("Raju Kumar")}>Update Name</button>
    </div>
  )
}

export default App;
