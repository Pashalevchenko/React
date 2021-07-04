export default function CommentDetail({location: {state}}) {
    return (
        <div>
            <p> PostId: {state.postId}</p>
            <p> id: {state.id}</p>
            <p> Name: {state.name}</p>
            <p> Email: {state.email}</p>
            <p> Body: {state.body}</p>
        </div>
    )
}