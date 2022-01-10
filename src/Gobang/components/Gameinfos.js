import styled from "styled-components";

const StyledInfos = styled.div`
  height: 570px;
  width: 300px;
  font-size: 48px;
  margin-left: 50px;
  margin-top: 30px;
`;

const StyledPlayer = styled.div`
  ${(props) => props.winner && `display: none;`}
  margin-top: 20px;
  font-size: 1.2rem;
  box-sizing: border-box;
`;
const StyledWinner = styled(StyledPlayer)`
  display: block;
`;
const StyledNextChess = styled.div`
  ${(props) =>
    props.isBlackNext
      ? `
  position: relative;
  left: 20%;
  margin-top: 100px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  box-shadow: 2px 2px 2px 0px rgba(30, 30, 30, 0.7);
  border: 1px solid #353530;
  &::after {
    position: absolute;
    content: "";
    width: 6px;
    height: 4px;
    border-radius: 66%;
    top: 8px;
    left: 8px;
    background: #cecece;
  }
  `
      : `
  position: relative;
  left: 20%;
  margin-top: 100px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dfdfdf;
  box-shadow: 2px 2px 2px 0px rgba(30, 30, 30, 0.7);
  border: 1px solid #aeaeae;
  &::after {
    position: absolute;
    content: "";
    width: 6px;
    height: 4px;
    border-radius: 66%;
    top: 8px;
    left: 8px;
    background: #ffffff;
  }
  `}
`;

export default function Gameinfos({ isBlackNext, winner }) {
  return (
    <StyledInfos>
      <>Gobang</>
      <StyledPlayer winner={winner}>
        Next Player :
        <StyledNextChess isBlackNext={isBlackNext} />
      </StyledPlayer>
      {winner && (
        <StyledWinner>
          The Winner :
          <StyledNextChess isBlackNext={!isBlackNext} />
        </StyledWinner>
      )}
    </StyledInfos>
  );
}
