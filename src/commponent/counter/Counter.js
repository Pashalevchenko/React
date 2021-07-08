import "./counter.css"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function Counter(props) {
    const counter = useSelector(({counterValue}) => counterValue);
    const dispach = useDispatch();
    const [increase, setIncrease] = useState('');
    const [decrese, setDecrese] = useState('');

    return (
        <div>
            <h1>{counter}</h1>
            <form className='form'>
                <input onChange={e => setIncrease(e.target.value)}/>
                <input onChange={e => setDecrese(e.target.value)}/>
            </form>
            <button onClick={() => {
                dispach({
                    type: 'INC',
                    payload: +increase
                })
            }
            }>Increse
            </button>

            <button onClick={() => {
                dispach({
                    type: 'DEC',
                    payload: +decrese
                })
            }
            }>Decrese
            </button>

            <button onClick={() => {
                dispach({
                    type: 'RES',
                })
            }
            }>Reset
            </button>
        </div>
    )
}