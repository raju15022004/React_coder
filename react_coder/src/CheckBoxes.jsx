import { useState } from "react";

 function CheckBoxes(){
  const [Skills,setSkills]=useState([])
  const handleSkills=(event)=>{
    console.log(event.target.value,event.target.Checked);
    if(event.target.Checked){
      setSkills([...Skills,event.target.value])
    }
    else{
      setSkills([...Skills.filter((item)=>item!=event.target.value)])
    }
  }
  return(
    <div>
      <h3>Select Your Skills</h3>
      <input onChange={handleSkills}type="checkbox" id="php" value="php"/>
      <label htmlFor="php">PHP</label>
      <br /><br />
      <input onChange={handleSkills}type="checkbox" id="js" value="js"/>
      <label htmlFor="js">JS</label>
      <br /><br />
      <input onChange={handleSkills}type="checkbox" id="Python" value="Python"/>
      <label htmlFor="Python">Python</label>
      <br /><br />

      <h1>{Skills.toString()}</h1>
    </div>
  )
 }

 export default CheckBoxes;
