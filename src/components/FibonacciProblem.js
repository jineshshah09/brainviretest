import React, { Component, Fragment } from "react";
import { isEmpty } from "lodash";

class FibonacciProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOutput: false,
      number: "",
      listOfNumbers: [],
      error: ""
    };
  }

  handleChange = value => {
    this.setState({
      showOutput: false,
      error: "",
      number: value
    });
  };

  calculateSeries = () => {
    const { number } = this.state;
    if (number && !isEmpty(number) && number >= 1) {
      let first = 0;
      let second = 1;
      let listOfNumbersTemp = [0, 1];
      let next = first + second;
      while (next < number) {
        listOfNumbersTemp.push(next);
        first = second;
        second = next;
        next = first + second;
      }
      this.setState({
        showOutput: true,
        listOfNumbers: listOfNumbersTemp,
        error: ""
      });
    } else {
      return this.setState({
        showOutput: true,
        listOfNumbers: [],
        error: "Please give a valid input gretaer than 1"
      });
    }
  };

  render() {
    const { showOutput, number, listOfNumbers, error } = this.state;
    return (
      <Fragment>
        <p>Please Enter Your Fibonnaci Series Number</p>
        <input
          type="number"
          id="number"
          name="number"
          value={this.state.number}
          onChange={item => this.handleChange(item.target.value)}
        />
        <br />
        <input
          type="button"
          value="Count"
          onClick={() => this.calculateSeries()}
        />
        {showOutput && isEmpty(error) && (
          <div>
            <div>User Input: {number}</div>
            <div>
              {listOfNumbers.map(value => (
                <a>{value}, </a>
              ))}
            </div>
          </div>
        )}
        {!isEmpty(error) && <div>{error}</div>}
      </Fragment>
    );
  }
}

export default FibonacciProblem;
