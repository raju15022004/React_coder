function Users() {
  const userData=[
    {id:1,name:'Raju'},
    {id:2,name:'Raju'},
    {id:3,name:'Raju'},
    {id:4,name:'Raju'},
    {id:5,name:'Raju'},
  ]
  return (
    <div>
    <h1>Users Page</h1>
    {
      userData.map((item)=>(
        <div>
          <h4>{item.name}</h4>
        </div>
      ))
    }
    </div>
  );

}

export default Users;

