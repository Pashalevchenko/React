import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {

  return (
    <div className='block'>
      <Router>
        <div className='block__links'>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
        </div>

            <Switch>
                <Route path={'/users'}><Users/></Route>
                <Route path={'/posts'}><Posts/></Route>
                <Route path={'/comments'}><Comments/></Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
