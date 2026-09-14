import { useActionState, useId } from "react";

 function App(){

  return(
  <div>
  <UserForm/>

    </div>
  )
}

function UserForm(){
  const name=useId();
  const password=useId();
  const terms=useId();
  const skills=useId();


return(
  <div>
    <form action="">
      <lable htmlFor={name}>ENter User Name</lable>
      <input id={name} type="text" placeholder="enter name"/>
      <br/><br/>
      <lable htmlFor={password}>ENter User password</lable>
      <input id={password} type="text" placeholder="enter password"/>
      <br/><br/>
      <lable htmlFor={skills}>ENter User skills</lable>
      <input id={skills} type="text" placeholder="enter skills"/>
      <br/><br/>
      <input id={terms} type="checkbox" placeholder="enter terms"/>
      <lable htmlFor={terms}>Terms and Condition</lable>

      <br/><br/>
    </form>
  </div>

)
}
export default App;
