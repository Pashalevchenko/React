export default function User ({item, userPost}){
    return(
        <div>
            {item.id} - {item.name} - <button onClick={()=>{
                 userPost(item.id)
            }
        }>Posts</button>
        </div>
    )
}