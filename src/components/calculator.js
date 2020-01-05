//calculates values from buttons clicked and passes value into display component

import React from "react";
import NumberButtons from "./number-buttons";
import TopRowButtons from "./top-row-buttons";
import OperatorButtons from "./operator-buttons";
import Display from "./display";
import styled from "styled-components";

const CalculatorContainer = styled.div`
  background: #2e5266;
  border-radius: 2%;
  display: block;
  width: 50%;
  margin: 2% auto auto auto;
  padding-top: 4%;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-top: 4%;
`;
const ButtonContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-left: 10%;
  margin-right: 0%;
  display: inline-block;
`;
const OperatorContainer = styled.div`
  display: inline-block;
  align-items: right;
  width: 5%;
  height: 100%:
  margin: 0%;
`;
const DisplayContainer = styled.div`
  width: 80%;
  margin: auto;
  background: #d3d0cb;
  color: #2e5266;
  padding-top: 4%;
  font-size: 2rem;
`;
const TopRowButtonContainer = styled.div`
  display: block;
  width: 100%;
  margin-left: 10%;
`;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, currentNumber: 0, pastOperator: "", display: 0 };
  }
  handleNumberClick = event => {
    const tempCurrentNumber = parseInt(event.target.value, 10);
    this.setState({ currentNumber: tempCurrentNumber });
    if (this.state.pastOperator === "") {
      this.setState({ total: tempCurrentNumber, display: tempCurrentNumber });
    }
    if (this.state.pastOperator !== "") {
      this.setState({
        display: tempCurrentNumber
      });
    }
  };
  handleAdd = () => {
    let pastOperatorValue = this.state.pastOperator;
    let tempCurrentTotal = this.state.total;
    let tempCurrentNumber = this.state.currentNumber;
    //console.log(tempCurrentTotal, tempCurrentNumber, pastOperatorValue);
    if (pastOperatorValue !== "") {
      if (pastOperatorValue === "+") {
        this.setState({ total: tempCurrentTotal + tempCurrentNumber });
      }
      if (pastOperatorValue === "-") {
        this.setState({ total: tempCurrentTotal - tempCurrentNumber });
      }
      if (pastOperatorValue === "*") {
        this.setState({ total: tempCurrentTotal * tempCurrentNumber });
      }
      if (pastOperatorValue === "/") {
        this.setState({ total: tempCurrentTotal / tempCurrentNumber });
      }
      if (pastOperatorValue === "%") {
        this.setState({ total: tempCurrentTotal % tempCurrentNumber });
      }
    }
    this.setState({
      pastOperator: "+"
    });
  };
  handleSubtract = event => {
    let pastOperatorValue = this.state.pastOperator;
    let tempCurrentTotal = this.state.total;
    let tempCurrentNumber = this.state.currentNumber;
    //console.log(tempCurrentTotal, tempCurrentNumber, pastOperatorValue);
    if (pastOperatorValue !== "") {
      if (pastOperatorValue === "-") {
        this.setState({ total: tempCurrentTotal - tempCurrentNumber });
      }
      if (pastOperatorValue === "+") {
        this.setState({ total: tempCurrentTotal + tempCurrentNumber });
      }
      if (pastOperatorValue === "*") {
        this.setState({ total: tempCurrentTotal * tempCurrentNumber });
      }
      if (pastOperatorValue === "/") {
        this.setState({ total: tempCurrentTotal / tempCurrentNumber });
      }
      if (pastOperatorValue === "%") {
        this.setState({ total: tempCurrentTotal % tempCurrentNumber });
      }
    }
    this.setState({ pastOperator: "-" });
  };
  handleMultiply = event => {
    let pastOperatorValue = this.state.pastOperator;
    let tempCurrentTotal = this.state.total;
    let tempCurrentNumber = this.state.currentNumber;
    //console.log(tempCurrentTotal, tempCurrentNumber, pastOperatorValue);
    if (pastOperatorValue !== "") {
      if (pastOperatorValue === "*") {
        this.setState({ total: tempCurrentTotal * tempCurrentNumber });
      }
      if (pastOperatorValue === "+") {
        this.setState({ total: tempCurrentTotal + tempCurrentNumber });
      }
      if (pastOperatorValue === "-") {
        this.setState({ total: tempCurrentTotal - tempCurrentNumber });
      }
      if (pastOperatorValue === "/") {
        this.setState({ total: tempCurrentTotal / tempCurrentNumber });
      }
      if (pastOperatorValue === "%") {
        this.setState({ total: tempCurrentTotal % tempCurrentNumber });
      }
    }
    this.setState({ pastOperator: "*" });
  };
  handleDivide = event => {
    let pastOperatorValue = this.state.pastOperator;
    let tempCurrentTotal = this.state.total;
    let tempCurrentNumber = this.state.currentNumber;
    //console.log(tempCurrentTotal, tempCurrentNumber, pastOperatorValue);
    if (pastOperatorValue !== "") {
      if (pastOperatorValue === "/") {
        this.setState({ total: tempCurrentTotal / tempCurrentNumber });
      }
      if (pastOperatorValue === "*") {
        this.setState({ total: tempCurrentTotal * tempCurrentNumber });
      }
      if (pastOperatorValue === "+") {
        this.setState({ total: tempCurrentTotal + tempCurrentNumber });
      }
      if (pastOperatorValue === "-") {
        this.setState({ total: tempCurrentTotal - tempCurrentNumber });
      }
      if (pastOperatorValue === "%") {
        this.setState({ total: tempCurrentTotal % tempCurrentNumber });
      }
    }
    this.setState({ pastOperator: "/" });
  };
  handleModulus = () => {
    let pastOperatorValue = this.state.pastOperator;
    let tempCurrentTotal = this.state.total;
    let tempCurrentNumber = this.state.currentNumber;
    //console.log(tempCurrentTotal, tempCurrentNumber, pastOperatorValue);
    if (pastOperatorValue !== "") {
      if (pastOperatorValue === "%") {
        this.setState({ total: tempCurrentTotal % tempCurrentNumber });
      }
      if (pastOperatorValue === "+") {
        this.setState({ total: tempCurrentTotal + tempCurrentNumber });
      }
      if (pastOperatorValue === "-") {
        this.setState({ total: tempCurrentTotal - tempCurrentNumber });
      }
      if (pastOperatorValue === "*") {
        this.setState({ total: tempCurrentTotal * tempCurrentNumber });
      }
      if (pastOperatorValue === "/") {
        this.setState({ total: tempCurrentTotal / tempCurrentNumber });
      }
    }
    this.setState({
      pastOperator: "%"
    });
  };
  handleEquals = () => {
    let tempCurrentNumber = this.state.currentNumber;
    let tempCurrentTotal = this.state.total;
    let newTotal = this.state.total;
    if (this.state.pastOperator === "+") {
      newTotal = tempCurrentTotal + tempCurrentNumber;
    }
    if (this.state.pastOperator === "-") {
      newTotal = tempCurrentTotal - tempCurrentNumber;
    }
    if (this.state.pastOperator === "*") {
      newTotal = tempCurrentTotal * tempCurrentNumber;
    }
    if (this.state.pastOperator === "/") {
      newTotal = tempCurrentTotal / tempCurrentNumber;
    }
    if (this.state.pastOperator === "%") {
      newTotal = tempCurrentTotal % tempCurrentNumber;
    }
    this.setState({
      total: newTotal,
      display: newTotal,
      pastOperator: "=",
      currentNumber: newTotal
    });
  };
  handleClear = () => {
    this.setState({ total: 0, display: 0, currentNumber: 0, pastOperator: "" });
  };
  handlePlusMinus = () => {
    const tempCurrentNumber = this.state.currentNumber;
    const tempCurrentTotal = this.state.total;
    const tempCurrentDisplay = this.state.display;

    if (this.state.pastOperator === "=") {
      this.setState({
        total: tempCurrentTotal * -1,
        display: tempCurrentDisplay * -1
      });
    } else if (this.state.pastOperator === "") {
      this.setState({
        currentNumber: tempCurrentNumber * -1,
        display: tempCurrentDisplay * -1,
        total: tempCurrentTotal * -1
      });
    } else if (this.state.pastOperator !== "" && "=") {
      this.setState({
        currentNumber: tempCurrentNumber * -1,
        display: tempCurrentDisplay * -1
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <CalculatorContainer>
        <DisplayContainer>
          <Display total={this.state.display} />
        </DisplayContainer>
        <ButtonWrapper>
          <TopRowButtonContainer>
            <TopRowButtons
              handleClear={this.handleClear}
              handlePlusMinus={this.handlePlusMinus}
              handleModulus={this.handleModulus}
            />
          </TopRowButtonContainer>
          <ButtonContainer>
            <NumberButtons
              handleNumberClick={this.handleNumberClick}
              handleEquals={this.handleEquals}
            />
          </ButtonContainer>
          <OperatorContainer>
            <OperatorButtons
              handleAdd={this.handleAdd}
              handleSubtract={this.handleSubtract}
              handleEquals={this.handleEquals}
              handleMultiply={this.handleMultiply}
              handleDivide={this.handleDivide}
            />
          </OperatorContainer>
        </ButtonWrapper>
      </CalculatorContainer>
    );
  }
}

export default Calculator;
