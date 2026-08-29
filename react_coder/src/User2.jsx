function User2({displayName,name,getUser}){
  return(
    <div>
      <button onClick={()=>displayName(name)}>Display Name</button>
      <button onClick={()=>getUser(name)}>Get User</button>
    </div>

  )
}
 export default User2;
