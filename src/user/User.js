import './User.css'
export default function User ({item, userPost}){
    return(
        <div className='user_contr'>
            <div> Name: {item.name}</div>
            <button onClick={()=>{
                 userPost(item.id)
            }
        }>Posts</button>
        </div>
    )
}