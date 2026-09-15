import { useState } from "react";
import College1 from "./College1";
import { SubjectContext } from "./ContextData";
 function App(){
  const [Subject,setSubject]=useState('')
  return(
  <div style={{backgroundColor:"yellow",padding:10}}>
    <SubjectContext.Provider value={Subject}>
      <select defaultValue={Subject} onChange={(event)=>setSubject(event.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="History">History</option>
        <option value="English">English</option>
      </select>
  <h1>Context API</h1>
  <button onClick={()=>setSubject('')}>Clear Subject</button>
  <College1/>
  </SubjectContext.Provider>
  </div>
  )
}



export default App;
