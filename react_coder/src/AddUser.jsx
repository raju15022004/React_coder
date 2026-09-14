function Adduser({setUser }){
  return(
    <div>
    <h1>Add User</h1>
    <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter password"/>
    <hr></hr>
    </div>
  )
}

export default Adduser;
