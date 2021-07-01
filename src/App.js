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
import AllRegistration from "./components/AllRegistration/AllRegistration";
import AddEvent from "./components/AddEvent/AddEvent";


function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
          <Navbar/>
            <Login/>
          </Route>
          <PrivateRoute path="/registerEvent/:id">
          <Navbar/>
            <RegisterEvent/>
          </PrivateRoute>
          <PrivateRoute path="/myEvent">
          <Navbar/>
            <MyEvent/>
          </PrivateRoute>
          <PrivateRoute path="/allRegistration">
          <Navbar/>
            <AllRegistration/>
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
          <Navbar/>
            <AddEvent/>
          </PrivateRoute>
          <Route path="*">
          <Navbar/>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
