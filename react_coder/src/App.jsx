import { useActionState } from 'react';
import './App.css'



function App() {

const handleLogin=(prevData,forData)=>{
  let name=forData.get('name')
  let password=forData.get('password')
  let regex=/^[A-Z0-9]+%$/i;

  if(name.length>5){
   return{error:"Name should not container more than 5 characters"}
  }else if(!regex.test (password)){
    return {error:'password can container only number and alphabets'}
  }else{
    return {message:'Login done'}
  }

}
const [data,action,pending]=useActionState(handleLogin,{});
    console.log(data);

  return (
<div>
  <h1>Validation with useActionstate in React</h1>
  <form action={action}>
<input name="name" placeholder='enter user name'/>
<br/><br/>
<input name='password' placeholder='enter user  password' />
<br/><br/>
<button >Login</button>
</form>
</div>
  );
}

export default App;
