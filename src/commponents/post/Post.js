import './Post.css'

export default function Post ({post}){
    return(
        <div className='block'>
            <div className='id'>Id: {post.id}</div>
            <div className='title'>Title: {post.title}</div>
            <div className='body'>Body: {post.body}</div>
        </div>
    )
}


