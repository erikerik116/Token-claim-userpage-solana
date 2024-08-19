import Load from "../features/icon/load";
import styled, { keyframes } from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ProcessBar = styled.div`
  width: 300px;
  height: 10px;
  background-color: white;
  border: 50px;
`;
const LoadingAnimation = keyframes`
    0%{
        width: 0px;

    }
    100%{
        width: 300px;
    }
`;

const LoadingBar = styled.div`
  background-color: #f8d467;
  height: 100%;
  border-radius: 50px;
  object-position: left;
  animation: 5s ${LoadingAnimation} linear;
`;

export default function Loading() {
  return (
    <MainContainer>
      <Container>
        <Load />
        <ProcessBar>
          <LoadingBar />
        </ProcessBar>
      </Container>
    </MainContainer>
  );
}
