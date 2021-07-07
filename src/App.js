import './App.css';
import Counter from "./commponent/counter/Counter";
import Users from "./commponent/users/Users";
import ReduxComponent from "./redux_component/ReduxComponent";
import {Provider} from "react-redux";
import {createStore} from "redux";


function App() {

    const initialState = {
        counterValue: 0,
        users: []
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
            default:
                return state
        }
    }


    const store = createStore(counterReduser)
    console.log(store)
    return (
        <div>
            <Provider store={store}>
              <ReduxComponent/>
            </Provider>
        </div>
    );
}

export default App;
