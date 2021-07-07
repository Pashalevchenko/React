import Counter from "../commponent/counter/Counter";
import Users from "../commponent/users/Users";

export default function ReduxComponent (props){
    return(
        <div>
            <Counter/>
            <Users/>
        </div>
    )
}