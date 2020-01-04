// "clear", "+/-", and "%" buttons on top row

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-color: none;
  box-shadow: 2px 2px #6e8898;
  background: #9fb1bc;
  color: #2e5266;
  margin: 1%;
  padding: 2%;
  width: 60px;
  height: 40px;
  font-size: 1rem;
`;

const TopRowButtons = props => {
  return (
    <div>
      <Button onClick={props.handleClear}>Clear</Button>
      <Button onClick={props.handlePlusMinus}>+/-</Button>
      <Button>%</Button>
    </div>
  );
};
export default TopRowButtons;
