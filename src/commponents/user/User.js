export default function User ({item ,selectUser}){
    return(
        <div>
            {item.id} - {item.name} - <button onClick={() =>{
            selectUser(item.id)}
        }>More</button>
        </div>
    )
}