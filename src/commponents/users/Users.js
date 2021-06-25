import User from "../user/User";

export default function Users ({items}){
    console.log({items})
    return(
        <div>
            {
                items.map(u => <User item={u}/>)
            }
        </div>
    )
}