import User from "../user/User";

export default function Users ({item, userPost}){
    return(
        <div>
            {
                item.map(user => <User item={user} userPost={userPost} key={user.id}/>)
            }
        </div>
    )
}