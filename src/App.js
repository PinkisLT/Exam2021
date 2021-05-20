import './App.css';
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
import SingleUser from "./pages/SingleUser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <div className="d-flex">
            <Link className="m-20" to="/users">VARTOTOJAI</Link>
            <Link className="m-20" to="/addUser">PRIDETI NAUJĄ VARTOTOJĄ</Link>
          </div>
          <Switch>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/addUser">
              <CreateUser/>
            </Route>
            <Route path="/updateUser/:id">
              <SingleUser/>
            </Route>
            <Redirect to="/users" />

          </Switch>
        </div>
      </Router>
  );
}

export default App;