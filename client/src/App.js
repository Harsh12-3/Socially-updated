import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Allpost from "./pages/allpost/Allpost";
import Update from "./pages/updatepage/Update";
import Todo from "./pages/todo/Todo";
import Online from "./pages/createconversation/Createconversation";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/allpost">
        < Allpost/>
        </Route>
        <Route exact path="/update">
        < Update/>
        </Route>
        <Route exact path="/todo">
        < Todo/>
        </Route>
        <Route exact path="/online">
        < Online user1={user._id}/>
        </Route>
        
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
