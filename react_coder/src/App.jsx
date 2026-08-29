import { useState, useTransition } from "react";

function App(){
 const [pending,startTransition]=useTransition();

 const handleButton=()=>{
  startTransition(async()=>{
    await new Promise(res=>setTimeout(res,5000))
  })
 }
  return(
  <div>
    <h1>useTransition Hook in React js 19</h1>
    {
      pending?
      <img style={{width:"100px"}} src="https://media1.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif?itemid=5662595" alt="" />:null
    }
    <button disabled={pending} onClick={handleButton}>Click</button>

  </div>
  );
}


export default App;
