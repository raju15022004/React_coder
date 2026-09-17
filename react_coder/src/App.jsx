import {  Route, Routes } from "react-router"
import Home from './Home'
import About from './About'
import Login from "./Login";
import NavBar  from "./NavBar";
import PageNotFound from './PageNotFound'

 function App(){
  return(
<>
<NavBar/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/Login" element={<Login/>}/>
  {/* <Route path="/*" element={<PageNotFound/>}></Route> */}
  <Route path="/*" element={<Navigate to="/Login"/>}/>
</Routes>
</>
  )
}

export default App;
