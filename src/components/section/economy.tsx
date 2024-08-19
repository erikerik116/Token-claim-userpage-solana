import { ButtonStructure } from "./tangible";
import styled from "styled-components";
import { Subtitle } from "./pixel";
import { TangibleTitle } from "./tangible";
import { ActionIcon } from "./tangible";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 754px;
  background-color: #e0ddec;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: inset 0 3px 1px -1px #252525;

  @media only screen and (max-width: 1279px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: fit-content;
  }
`;

const LeftSide = styled.div`
  background: url("eco.png");
  background-repeat: no-repeat;
  background-position-x: calc(100% - 140px);
  background-position-y: bottom;

  @media only screen and (max-width: 1279px) {
    background-position-x: center;
    background-size: 600px;
  }

  @media only screen and (max-width: 640px) {
    background-size: 400px;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1279px) {
    order: -1;
    justify-content: center;
    padding: 58px 0;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  justify-content: center;
  width: 553px;

  @media only screen and (max-width: 1279px) {
    align-items: center;
  }

  @media only screen and (max-width: 640px) {
    width: calc(100% - 36px);
    gap: 18px;
    align-items: center;
  }
`;

export const Economy = () => {
  return (
    <MainContainer>
      <LeftSide />
      <RightSide>
        <Wrap>
          <TangibleTitle>Kiki Koalas ecosystem</TangibleTitle>
          <Subtitle>
            Our vision extends far beyond creating remarkable NFRs. We are
            committed to building am expansive ecosystem of utility that will
            propel Kiki Koalas into a colossal WEB3 brand.
          </Subtitle>

          <ButtonStructure>
            WHITE PAPER
            <ActionIcon>soon</ActionIcon>
          </ButtonStructure>
        </Wrap>
      </RightSide>
    </MainContainer>
  );
};
