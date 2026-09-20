
import { useEffect, useState } from "react";

function UserList() {

  const [usersData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {

    const url = "http://localhost:3000/users";

    let response = await fetch(url);

    response = await response.json();

    console.log(response);

    setUserData(response);

    setLoading(false);
  };

  return (
    <div>

      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
      </ul>

      {!loading ? (

        usersData.map((user) => {

          return (
            <ul
              key={user.name}
              className="user-list user-list-head"
            >
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>
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

