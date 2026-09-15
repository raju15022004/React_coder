import useToggle from "./useToggle"
 function App(){

  const[value,toggleValue]=useToggle(true)

  // console.log("val----",value);
  return(
  <div>
    <button onClick={toggleValue}>Toggle Heading</button>
    <button onClick={()=>toggleValue(false)}>Hide Heading</button>
    <button onClick={()=>toggleValue(true)}>Show Heading</button>

    {
      value?<h1>Custom in React js</h1>:null
    }
  </div>
  )
}



export default App;
