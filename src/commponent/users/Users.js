import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import User from "../user/User";

export default function Users(props) {
    const dispatch = useDispatch();
    const users = useSelector(({users}) => users);

    const fetchUser = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
        console.log(data)
        dispatch({
            type: 'USER',
            payload: data
        })
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    )
}