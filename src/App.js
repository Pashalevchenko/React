import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <div className='app__links'>
                    <Link className="link" to={'/users'}>User</Link>
                    <Link className="link" to={'/posts'}>Posts</Link>
                    <Link className="link" to={'/comments'}>Comments</Link>
                </div>
                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
