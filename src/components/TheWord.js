import React from "react";
import styled from "styled-components";
import handleGuess from "./App";

const TheWord = ({ word }) => (
  <Wrapper>
    {spanFunction(word)}
  </Wrapper>
)

const spanFunction = (word) => {
  console.log(word);
  return word.revealed.map((revealedCharacter) => {
    return <Span line={revealedCharacter == ""}>{revealedCharacter}</Span>
  });
}


const Wrapper = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
`;
const Span = styled.span`
  display: block;
  border-bottom: ${(props) => (props.line ? "2px solid white" : "none" )};
  width: 30px;
  margin: 0 3px;
  text-align: center;
`;

export default TheWord;
