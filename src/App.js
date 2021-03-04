import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./home";
import Success from "./success";

function App() {




  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Success} path="/success" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
