import React, { Component, Fragment } from "react";
import { isEmpty } from "lodash";

class PermutationProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      showOutput: false,
      finalResultList: []
    };
    this.arrayOne = "";
    this.arrayTwo = "";
    this.arrayThree = "";
  }

  handleChange = event => {
    if (this.state.showOutput || this.state.error) {
      this.setState({
        showOutput: false,
        error: ""
      });
    }
    if (event.target.name === "arrayOne") {
      this.arrayOne = event.target.value;
    } else if (event.target.name === "arrayTwo") {
      this.arrayTwo = event.target.value;
    } else if (event.target.name === "arrayThree") {
      this.arrayThree = event.target.value;
    }
  };

  calculatePermutation = () => {
    if (
      isEmpty(this.arrayOne) ||
      isEmpty(this.arrayTwo) ||
      isEmpty(this.arrayThree)
    ) {
      this.setState({
        error: "Please give a valid input",
        showOutput: true,
        finalResultList: []
      });
    }
    let firstArray,
      secondArray,
      thirdArray,
      finalResultListTemp = [];
    firstArray = this.arrayOne.split(",");
    secondArray = this.arrayTwo.split(",");
    thirdArray = this.arrayThree.split(",");
    for (let i = 0; i < firstArray.length; i++) {
      for (let j = 0; j < secondArray.length; j++) {
        for (let k = 0; k < thirdArray.length; k++) {
          let finalResultTemp =
            firstArray[i] + "," + secondArray[j] + "," + thirdArray[k];
          console.log(finalResultTemp);
          finalResultListTemp.push(finalResultTemp);
        }
      }
    }
    this.setState({
      showOutput: true,
      finalResultList: finalResultListTemp
    });
  };

  render() {
    const { showOutput, finalResultList, error } = this.state;
    return (
      <Fragment>
        <div>
          Array One :{this.arrayOne}
          <input
            type="text"
            id="arrayOne"
            name="arrayOne"
            onChange={event => this.handleChange(event)}
          />
          <br />
          Array Two :
          <input
            type="text"
            id="arrayTwo"
            name="arrayTwo"
            onChange={event => this.handleChange(event)}
          />
          <br />
          Array Three :
          <input
            type="text"
            id="arrayThree"
            name="arrayThree"
            onChange={event => this.handleChange(event)}
          />
          <br />
          <input
            type="button"
            value="Count"
            onClick={() => this.calculatePermutation()}
          />
        </div>
        {showOutput && isEmpty(error) && (
          <Fragment>
            {finalResultList.map(value => (
              <p>{value}</p>
            ))}
          </Fragment>
        )}
        {!isEmpty(error) && <div>{error}</div>}
      </Fragment>
    );
  }
}

export default PermutationProblem;
