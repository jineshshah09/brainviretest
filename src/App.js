import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import FibonacciProblem from "./components/FibonacciProblem";
import PermutationProblem from "./components/PermutationProblem";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fibonacciproblem" component={FibonacciProblem} />
          <Route path="/permutationproblem" component={PermutationProblem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
