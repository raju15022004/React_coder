import { useEffect } from "react"

const Counter1=({count,data})=>{

  useEffect(()=>{
    console.log("mounting phase only");
  },[])

  return(
    <div>
      <h1>Counter value{count}</h1>
      <h1>Data value{data}</h1>
    </div>
  )
}

export default Counter1;
