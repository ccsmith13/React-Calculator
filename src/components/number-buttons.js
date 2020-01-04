//number buttons, '.', and 'enter' buttons

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-color: none;
  box-shadow: 2px 2px #6e8898;
  background: #9fb1bc;
  color: #2e5266;
  margin: 1%;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 2%;
  width: 60px;
  height: 40px;
  font-size: 1rem;
`;
const EnterButton = styled.button`
  border-color: none;
  box-shadow: 2px 4px #6e8898;
  background: #9fb1bc;
  color: #2e5266;
  margin: 1%;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 2%;
  width: 260px;
  height: 40px;
  font-size: 1rem;
`;

const NumberButtons = props => {
  let buttonList = [];
  for (let i = 0; i < 10; i++) {
    buttonList.push(
      <Button onClick={props.handleNumberClick} value={i} key={i}>
        {i}
      </Button>
    );
  }
  buttonList.push(<Button key={10}>.</Button>);
  buttonList.push(
    <EnterButton key={11} onClick={props.handleEquals}>
      Enter
    </EnterButton>
  );
  return buttonList;
};

export default NumberButtons;
