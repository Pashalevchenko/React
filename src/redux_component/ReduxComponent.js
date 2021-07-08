import Counter from "../commponent/counter/Counter";
import Users from "../commponent/users/Users";
import {useSelector} from "react-redux";
import {createStore} from "redux";

const initialState = {
    counterValue: 0,
    users: [],
    posts: [],
    comments: []
}

const counterReduser = (state = initialState, action)=>{
    switch (action.type) {
        case 'INC' :{
            return {...state, counterValue: state.counterValue + action.payload}
        }
        case 'DEC' :{
            return {...state, counterValue: state.counterValue - action.payload}
        }
        case 'RES' :{
            return {...state, counterValue: 0}
        }
        case 'USER' :{
            return {...state, users: action.payload}
        }
        case 'POSTS' :{
            return {...state, posts: action.payload}
        }
        case 'COMMENT' :{
            return {...state, comments: action.payload}
        }
        default:
            return state
    }
}


export const store = createStore(counterReduser)


export default function ReduxComponent (props){
    return(
        <div>
            <Counter/>
        </div>
    )
}