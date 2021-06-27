import {useEffect, useState} from "react";
import {getUsers, getUser} from "./commponents/services/API";
import Users from "./commponents/users/Users";
import About from "./commponents/about/About";
import User from "./commponents/user/User";

export default function App (){
  let [users, setUsers] = useState([]);
  let [userDetails, setUserDetails] = useState([]);
  let useState1 = useState();
  useEffect(() => {
        getUsers().then(response => {
          setUsers(response.data)
        });

  }, [])
    function selectUser(id) {
        getUser(id).then(value => setUserDetails(value.data))
    }
    return(
        <div>
           <Users items={users} selectUser={selectUser}/>
            <hr/>
            {
                userDetails && <About item={userDetails}/>
            }

        </div>
    )
}


