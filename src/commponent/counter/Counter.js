import {createStore} from "redux";
import {Provider} from "react-redux";
import Count from "../count/Count";

export default function Counter (props){

    const initialState = {
        counterValue: 0,
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
            default:
                return state
        }
    }


    const store = createStore(counterReduser)
    console.log(store)

    return(
        <div>
            <Provider store={store}>
                <Count/>
            </Provider>
        </div>
    )
}