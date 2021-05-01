import logo from "./logo.svg";
import "./App.css";
import { LandingPage } from "./landing";
import { Dashboard } from "./dashboard";
import { ProtectedRoute } from "./protectedroute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
