import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <h3>BrainvireTest</h3>
        <ul className="page-links">
          <Link to="/fibonacciproblem">
            <li className="link">Fibonacci</li>
          </Link>
          <Link to="/permutationproblem">
            <li className="link">Permutation</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
