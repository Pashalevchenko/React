import {useSelector, useDispatch} from "react-redux";

export default function Count (props){
    const  counter = useSelector(({counterValue})=> counterValue)
    const dispach = useDispatch()
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>{
                dispach({
                    type: 'INC',
                    payload: 10
                })
            }
            }>Increse</button>
            <button onClick={()=>{
                dispach({
                    type: 'DEC',
                    payload: 1
                })
            }
            }>Decrese</button>
            <button onClick={()=>{
                dispach({
                    type: 'RES',
                })
            }
            }>Reset</button>
        </div>
    )
}