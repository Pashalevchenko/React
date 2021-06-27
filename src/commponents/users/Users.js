import User from "../user/User";

export default function Users ({items, selectUser}){
    return(
        <div>
            {
                items.map(user => <User item={user} selectUser={selectUser}/>)
            }
        </div>
    )
}