import User2 from "./User2"

function App(){

  const displayName=(name)=>{
    alert(name)
  }

    const getUser=()=>{
     alert("get user function called ")
    }

  return(
  <>
  <h1>Call Parent component function from chaild component</h1>
  <User2  displayName={displayName} name="raju" getUser={getUser}/>
  <User2  displayName={displayName} name="raj" getUser={getUser}/>
  <User2  displayName={displayName} name="rohit" getUser={getUser}/>
  <User2  displayName={displayName} name="raju" getUser={getUser}/>

  </>
  )
}

export default App;
