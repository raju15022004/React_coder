import { useActionState } from "react";

 function App(){
  const handleSubmit=async(previousData,FormData)=>{
    let name=FormData.get('name');
    let password=FormData.get('password');

    await new Promise(res=>setTimeout(res,2000))
    if(name && password){
      return{message:'Data Submitted'}
    }else{
      return{error:'Failed to Submit.Enter proper data'}
    }

    // console.log("handleSubmit called",name,password);
  }

  const [data,action,pending]=useActionState(handleSubmit,undefined)
   console.log(data);
  return(
  <div>
    <h1>useActionState Hook in React js</h1>
    <form action={action}>
      <input type="text" placeholder="enter name" name="name"/>
      <br/><br/>
      <input type="password" placeholder="enter password" name="password"/>
      <br/><br/>
      <button disabled={pending}>Submit Data</button>
      <br/>
      {
        data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }
      {
        data?.message && <span style={{color:"green"}}>{data?.message}</span>
      }
    </form>

    </div>
  )
}

export default App;
