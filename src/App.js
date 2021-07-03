import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import UserDetails from "./components/user_details/UserDetails";


function App() {
  return (
      <Router>
        <div>
            <Link to={'/users'}>User</Link>
            <Link to={'/posts'}>Posts</Link>
            <Switch>
              <Route path={'/users'} component={Users}/>
              <Route path={'/posts'} component={Posts}/>
              {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
            </Switch>
        </div>
      </Router>
  );
}

export default App;
