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
`;
export default function GameSquare({ position }) {
  const { x, y } = position;
  return <Square row={y} col={x} />;
}
