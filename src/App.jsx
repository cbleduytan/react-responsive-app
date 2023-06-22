import "./App.scss";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import EmployeeTables from "./components/EmployeeTables";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/products" />
        <Route exact path="/employee-table" component={EmployeeTables} />
        <Route path="/contacts" />
      </Switch>
    </Router>
  );
}

export default App;
