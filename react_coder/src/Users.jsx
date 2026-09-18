import { Link } from "react-router";

function Users() {
  const userData=[
    {id:1,name:'Raju'},
    {id:2,name:'Raju'},
    {id:3,name:'Raju'},
    {id:4,name:'Raju'},
    {id:5,name:'Raju'},
  ]
  return (
    <div style={{marginLeft:20}}>
    <h1>Users Page</h1>
    {
      userData.map((item)=>(
        <div>
          <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
        </div>
      ))
    }

     <h1>Users List Page Name In URL</h1>
    {
      userData.map((item)=>(
        <div>
          <h4><Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link></h4>
        </div>
      ))
    }
    </div>
  );

}

export default Users;

