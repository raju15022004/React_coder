import {Routes,Route, NavLink} from 'react-router'
import './App.css'
import UserList from "./UserList";
import UserAdd from './UserAdd';


function App() {



  return (
<div>
  <ul className='nav-list'>
    <li>
    <NavLink to="/">List</NavLink>
    </li>
    <li>
      <NavLink to="/add">Add User</NavLink>
    </li>
  </ul>
<Routes>
  <Route path="/" element={<UserList/>} />
  <Route path="/add" element={<UserAdd/>} />
</Routes>
</div>
  );
}

export default App;
