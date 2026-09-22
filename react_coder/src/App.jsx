import { lazy, Suspense, useState } from "react";
// import UserLazr from "./UserLazy";
import "./App.css";
const UserLazy=lazy(()=>import('./UserLazy'));


function App() {

  const [load,setLoad]=useState(false)
  return (
<div>
<h1>Lazy Loading</h1>
{
  load? <Suspense fallback={<h3>loading...</h3>}><UserLazy/></Suspense>:null
}

<button onClick={()=>setLoad(true)}>Load User</button>
</div>
  );
}

export default App;
