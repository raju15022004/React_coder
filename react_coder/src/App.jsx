import { useRef } from "react";
import Userinput from "./Userinput"

function App(){

  const inputRef=useRef(null)

  const updateInput=()=>{
    inputRef.current.value=1000;
    inputRef.current.focus();
  }

  return(
  <>
<h1>Forward Ref</h1>
<Userinput ref={inputRef} />
<button onClick={updateInput}>Update Input field</button>
  </>
  )
}

export default App;
