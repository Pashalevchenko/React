import './App.css';
import Users from "./commponent/users/Users";
import ReduxComponent from "./redux_component/ReduxComponent";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Posts from "./commponent/posts/Posts";
import Comments from "./commponent/comments/Comments";

function App() {
    return (
        <div className='container'>
            <Router>
                <ReduxComponent/>
                <div className='links'>
                    <Link to={'/user'}>User</Link>
                    <Link to={'/post'}>Post</Link>
                    <Link to={'/comment'}>Comment</Link>
                </div>
                <Switch>
                    <Route path={'/user'} component={Users}/>
                    <Route path={'/post'} component={Posts}/>
                    <Route path={'/comment'} component={Comments}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
