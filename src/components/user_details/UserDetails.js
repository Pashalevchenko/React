import {useEffect, useState} from "react";

export default function UserDetails({location: {state}}) {
    const [user, setUser] = useState([]);
    useEffect(() => {
        setUser({...state})
    }, [state])

    return (
        <div>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>User name: {user.username}</p>
            <p>Email: {user.email}</p>
            {/*<p>Address: </p>*/}
            {/*<p>Street: {user.address.street}</p>*/}
            {/*<p>Suite: {user.address.suite}</p>*/}
            {/*<p>City: {user.address.city}</p>*/}
            {/*<p>Zipcode: {user.address.zipcode}</p>*/}
            {/*<p>Geo: </p>*/}
            {/*<p>Lat: {user.address.geo.lat}</p>*/}
            {/*<p>Lng: {user.address.geo.lng}</p>*/}
        </div>
    )
}