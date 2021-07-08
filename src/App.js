import './App.css';
import Counter from "./commponent/counter/Counter";
import Users from "./commponent/users/Users";
import ReduxComponent from "./redux_component/ReduxComponent";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Posts from "./commponent/posts/Posts";
import Comments from "./commponent/comments/Comments";


function App() {

    return (
        <div>
          <Router>
                  <ReduxComponent/>
              <Link to={'/user'} >User</Link>
              <Link to={'/post'} >Post</Link>
              <Link to={'/comment'} >Comment</Link>
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
