import {getComments} from "../../service/api/API";
import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function Comments (){
    const [comments, setComments] = useState([])

   useEffect(()=>{
       getComments().then(response =>{
           setComments(response.data)
       })
   })

    return(
        <div>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    )
}
