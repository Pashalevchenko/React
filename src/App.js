import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

function App() {

    const fetchPost = async () =>{
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        dispatch({
            type: 'SET.POSTS',
            payload: data
        })
    }
    useEffect(()=>{
        fetchPost()
    },[])
    const counter = useSelector(({caunterValue}) => caunterValue)
    const posts = useSelector(({posts}) => posts)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => {
                dispatch({type: 'INC', payload: 4})
            }
            }>Increse
            </button>
            <button onClick={() => {
                dispatch({type: 'DEC'})
            }
            }>DEC
            </button>
            <button onClick={() => {
                dispatch({type: 'RESET'})
            }
            }>RESET
            </button>
            {posts.map(post =>(
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    );
}

export default App;
