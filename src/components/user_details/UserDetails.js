import {useEffect, useState} from "react";
// import {getDetails} from "../service/api/API";

export default function UserDetails ({location:{state}}){
     const [user, setUser] = useState([]);
     useEffect(() =>{
         setUser({...state})
     },[state])

    return(
        <div>
            <hr/>
            {user.id} - {user.name}
        </div>
    )
}