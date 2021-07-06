import './App.css';
import { Link, Route } from "react-router-dom";
import Users from "./commponents/users/Users";

function App() {
    return (
        <div>
            <Link to={'/users'}>User</Link>

            <Route path={'/users'} component={Users}/>
        </div>
    );
}

export default App;
