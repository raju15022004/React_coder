import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import Users from "./Users";
import UserDeatils from "./UserDeatails";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/users/list?" element={<Users />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/users/:id/:name?" element={<UserDeatils/>}/>
      </Route>



      <Route path="/college" element={<College />}>
        <Route index element={<Student />} />
        <Route path="Department" element={<Department />} />
        <Route path="detail" element={<Details />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
