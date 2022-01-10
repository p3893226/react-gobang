import styled from "styled-components";

const Square = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  &::before {
    content: "";
    height: 100%;
    width: 2px;
    background: #51402c;
    position: absolute;
    left: 50%;
    ${(props) => (props.row === 18 ? "height:50%;" : "")}; //最後一排
    ${(props) => (props.row === 0 ? "top: 50%;" : "")}//第一排
  }
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: #51402c;
    position: absolute;
    top: 50%;
    ${(props) => (props.col === 18 ? "width: 56%;" : "")}; //最後一欄
    ${(props) => (props.col === 0 ? "right: -50%;" : "")}//第一欄
  }
  span {
    position: absolute;
    width: 24px;
    height: 24px;
    &:hover {
      z-index: 3;
      top: 19%;
      left: 19%;
      cursor:pointer;

      border-radius: 50%;
      background: ${(props) =>
        props.blackIsNext === true
          ? `rgb(45, 45, 45, 0.8)`
          : `rgb(241, 234, 226, 0.8)`};
        box-shadow: 2px 2px 3px 0px rgba(90, 90, 90, 0.8);
  }
`;

const StyledChess = styled.div`
  ${(props) =>
    props.value === "Black" &&
    `
  {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: black;
    z-index: 3;
    top:19%;
    left:16%;
    box-shadow: 2px 2px 2px 0px rgba(30, 30, 30, 0.7);
    border: 1px solid #353530;
    &::after{
      position: absolute;
      content: "";
      width: 3px;
      height: 2px;
      border-radius: 66%;
      top: 4px;
      left: 5px;
      background: #cecece;
    }
  }
  `}
  ${(props) =>
    props.value === "White" &&
    `
  {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #dfdfdf;
    z-index: 3;
    top:19%;
    left:16%;
    box-shadow:2px 2px 2px 0px rgba(30, 30, 30, 0.7);
    border: 1px solid #aeaeae;
    &::after{
      position: absolute;
      content: "";
      width: 3px;
      height: 2px;
      border-radius: 66%;
      top: 4px;
      left: 5px;
      background: #ffffff;
    }
  }
  `}
`;

export default function GameSquare({
  position,
  handleChessClick,
  board,
  isBlackNext,
}) {
  const { x, y } = position;
  const chessClick = () => {
    handleChessClick(position);
  };
  return (
    <Square row={y} col={x} onClick={chessClick} blackIsNext={isBlackNext}>
      <span />
      <StyledChess value={board[y][x]} />
    </Square>
  );
}
