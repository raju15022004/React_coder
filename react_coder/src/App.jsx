import { useState } from "react";

function App() {

  const Colors=JSON.parse(localStorage.getItem('color'))
  const [r,setR]=useState(Colors && Colors.r?Colors.r:0);
  const [g,setG]=useState(Colors && Colors.g?Colors.g:0);
  const [b,setB]=useState(Colors && Colors.b?Colors.b:0);

  const save=()=>{
    console.log("saved");

    localStorage.setItem("color",JSON.stringify({r,g,b}))
  }

  return (
<div>
<h1>Color Mixer</h1>
<div style={{backgroundColor:'rgb('+r+','+g+','+b+')',height:200,width:200}}></div>
<label htmlFor="">Red</label>
value={r}
<input type="range" onChange={(event)=>setR(event.target.value)} min={0} max={255}/>
<br/><br/>
<label htmlFor="">Green</label>
value={g}
<input type="range" onChange={(event)=>setG(event.target.value)} min={0} max={255}/>
<br/><br/>
<label htmlFor="">Blue</label>
value={b}
<input type="range" onChange={(event)=>setB(event.target.value)} min={0} max={255}/>
<br/><br/>
<button onClick={save}>Save Color Combination</button>
</div>
  );
}

export default App;

