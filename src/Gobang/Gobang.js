import GameSquare from "./components/GameSquare";
import Gameinfos from "./components/Gameinfos";
import { useState, useRef, useEffect } from "react";
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
  const [isBlackNext, setIsBlackNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const lastX = useRef();
  const lastY = useRef();

  const handleChessClick = (position) => {
    const { x, y } = position;
    if (board[y][x] || winner) return;
    lastX.current = x;
    lastY.current = y;
    const boardCopy = JSON.parse(JSON.stringify(board));
    boardCopy[y][x] = isBlackNext ? "Black" : "White";
    setBoard(boardCopy);
    setIsBlackNext(!isBlackNext);
  };

  const handleGetWinner = (board, currentX, currentY) => {
    if (currentX === undefined || currentY === undefined) return;
    const lastColor = board[currentY][currentX];
    function calculateConnect(dirX, dirY) {
      let counter = 0;
      let tempX = currentX;
      let tempY = currentY;
      do {
        tempX += dirX;
        tempY += dirY;
        if (board[tempY] && board[tempY][tempX] === lastColor) counter++;
      } while (board[tempY] && board[tempY][tempX] === lastColor);
      return counter;
    }
    if (
      calculateConnect(-1, 0) + calculateConnect(1, 0) >= 4 ||
      calculateConnect(0, -1) + calculateConnect(0, 1) >= 4 ||
      calculateConnect(-1, -1) + calculateConnect(1, 1) >= 4 ||
      calculateConnect(1, -1) + calculateConnect(-1, 1) >= 4
    ) {
      return lastColor;
    }
    return null;
  };
  useEffect(() => {
    if (handleGetWinner(board, lastX.current, lastY.current)) {
      setWinner(handleGetWinner(board, lastX.current, lastY.current));
    }
  }, [board, winner]);

  const currentSquares = board.map((row, y) => (
    <StyledRow key={y}>
      {row.map((col, x) => {
        const position = { x, y };
        return (
          <GameSquare
            key={x}
            position={position}
            handleChessClick={handleChessClick}
            isBlackNext={isBlackNext}
            board={board}
          ></GameSquare>
        );
      })}
    </StyledRow>
  ));

  return (
    <>
      <StyledBoardWrapper>
        <StyledBoard>{currentSquares}</StyledBoard>
        <Gameinfos isBlackNext={isBlackNext} winner={winner}></Gameinfos>
      </StyledBoardWrapper>
    </>
  );
}

export default Gobang;
