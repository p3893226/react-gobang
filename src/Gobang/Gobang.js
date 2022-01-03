import GameSquare from "./components/GameSquare";
import Gameinfos from "./components/Gameinfos";
import { useState } from "react";
import styled from "styled-components";

const StyledBoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 85px;
`;

const StyledBoard = styled.div`
  background: #b89874;
  border: solid 1px #3a3a3a;
  border-radius: 3px;
  box-shadow: rgb(60 60 60 / 50%) 4px 8px 12px 1px;
  z-index: 1;
`;

const StyledRow = styled.div`
  display: flex;
`;

function Gobang() {
  const Squares = Array(19).fill(Array(19).fill(null));
  const [board, setBoard] = useState(Squares);

  const currentSquares = board.map((row, y) => (
    <StyledRow key={y}>
      {row.map((col, x) => {
        const position = { x, y };
        return <GameSquare key={x} position={position}></GameSquare>;
      })}
    </StyledRow>
  ));

  return (
    <>
      <StyledBoardWrapper>
        <StyledBoard>{currentSquares}</StyledBoard>
        <Gameinfos />
      </StyledBoardWrapper>
    </>
  );
}

export default Gobang;
