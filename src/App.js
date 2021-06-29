import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import MyEvent from "./components/MyEvent/MyEvent";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/registerEvent/:id">
            <RegisterEvent/>
          </PrivateRoute>
          <PrivateRoute path="/myEvent">
            <MyEvent/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
