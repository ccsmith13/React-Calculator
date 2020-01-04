// "/", "x", "-", "+", "=" buttons on right-hand column of calculator

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-color: none;
  box-shadow: 2px 2px #6e8898;
  background: #9fb1bc;
  color: #2e5266;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 2%;
  width: 40px;
  height: 40px;
  font-size: 1rem;
`;

const OperatorButtons = props => {
  return (
    <div>
      <Button onClick={props.handleDivide}>/</Button>
      <Button onClick={props.handleMultiply}>x</Button>
      <Button onClick={props.handleSubtract}>-</Button>
      <Button onClick={props.handleAdd}>+</Button>
      <Button onClick={props.handleEquals}>=</Button>
    </div>
  );
};
export default OperatorButtons;
