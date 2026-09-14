import { useState } from "react";
import Adduser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App(){
const [user,setUser]=useState('')
  return(
  <div>
   <Adduser setUser={setUser}/>
   <DisplayUser user={user}/>
    </div>
  )
}

export default App;
