// export default function Comment (props){
//     let {item:value} = props
//     return(
//         <div>postID {value.postId} - id {value.id} - comment: {value.name}</div>
//     )
// }
                                                               // TODO можна написати так:
export default function Comment ({item}) {
    return(
        <div>postID {item.postId} - id {item.id} - comment: {item.name}</div>
    )
}
