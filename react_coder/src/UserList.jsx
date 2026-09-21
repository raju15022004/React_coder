
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UserList() {

  const [usersData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();
  const url = "http://localhost:3000/users";
  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {

    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

  const deleteUser=async(id)=>{
   let response=await fetch(url+"/"+id,{
    method:'delete'
   })
   response=await response.json();
   if(response){
    alert("record deleted")
    getUsersData()
   }
  }

  const edituser=(id)=>{
    navigate("/edit/"+id)
  }

  return (
    <div>

      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>

      {!loading ? (

        usersData.map((user) => {

          return (
            <ul
              key={user.name}
              className="user-list "
            >
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>
              <li>
                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                <button onClick={()=>edituser(user.id)}>Edit</button>

                </li>
            </ul>
          );

        })

      ) : (

        <h2>Loading...</h2>

      )}

    </div>
  );
}

export default UserList;

