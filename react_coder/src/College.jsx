import { NavLink, Outlet } from "react-router";

function College(){

  return(
<div className="college" style={{textAlign:"center"}}>
  <h1>College Page</h1>
  <NavLink className="link" to="student">Student</NavLink>
  <NavLink className="link" to="Department">Department</NavLink>
  <NavLink className="link" to="detail">College Details</NavLink>
  <Outlet/>
</div>
  )
}

export default College;
