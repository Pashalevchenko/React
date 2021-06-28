import Post from "../post/Post";
export default function Posts ({item}){
    return(
        <div>
            {
                item.map(post => <Post item={post}/>)
            }
        </div>
    )
}