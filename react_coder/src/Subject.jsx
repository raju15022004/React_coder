import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject(){
  const Subject=useContext(SubjectContext)
  return(
    <div style={{backgroundColor:'red',padding:10}}>
      <h1>Subject is :{Subject} </h1>
    </div>
  )
}

export default Subject;
