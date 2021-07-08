export default function Comment({comment}) {
    return (
        <div>
            <p>{comment.id} - {comment.name}</p>
        </div>
    )
};