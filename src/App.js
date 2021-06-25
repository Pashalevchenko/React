import {useEffect, useState} from "react";
import {getUsers} from "./commponents/services/API";
import Users from "./commponents/users/Users";

export default function App (){
  let [users, setUsers] = useState([]);
  useEffect(() => {
        getUsers().then(response => {
          setUsers(response.data)
        });
  }, [])
    return(
        <div>
           <Users items={users}/>
        </div>
    )
}


