import styled from "styled-components";
import Star from "../../features/icon/star";
// import ButtonStructure from "./tangible";
import { ButtonStructure } from "./tangible";
import { TangibleTitle } from "./tangible";
import { Subtitle } from "./tangible";
import { ActionIcon } from "./tangible";

const MainContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1279px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  justify-content: center;
  width: 462px;
  @media only screen and (max-width: 1279px) {
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    width: calc(100vw - 40px);
    gap: 18px;
  }
`;

const LeftSide = styled.div`
  background-color: #ffdcf7;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 210px 0;
  box-shadow: inset -3px 3px 1px -1px #252525;
  ${Wrap} {
    margin-right: 146px;
  }
  @media only screen and (max-width: 1279px) {
    padding: 160px 0;
    justify-content: center;
    box-shadow: inset 0 3px 1px -1px #252525;

    ${Wrap} {
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 58px 0;
  }
`;
const RightSide = styled.div`
  background-color: #caf2ff;
  display: flex;
  align-items: center;
  box-shadow: inset -3px 3px 1px -1px #252525;

  ${Wrap} {
    margin-left: 146px;
  }

  @media only screen and (max-width: 1279px) {
    justify-content: center;
    box-shadow: inset 0 3px 1px -1px #252525;

    ${Wrap} {
      margin: 0;
    }
  }
`;
export const Team = () => {
  return (
    <MainContainer>
      <LeftSide>
        <Wrap>
          <Star />
          <TangibleTitle>Meet the team</TangibleTitle>
          <Subtitle>
            Sink your claws into the team leading the Kiki Koalas to lofty gun
            tree tops.
          </Subtitle>
          <ButtonStructure>STANK THE TEAM</ButtonStructure>
        </Wrap>
      </LeftSide>
      <RightSide>
        <Wrap>
          <Star />
          <TangibleTitle>Hang out with us</TangibleTitle>
          <Subtitle>
            Kick it with us in our tree tops where we sleep. eat and repeat.
          </Subtitle>
          <ButtonStructure>
            DISCORD
            <ActionIcon>soon</ActionIcon>
          </ButtonStructure>
        </Wrap>
      </RightSide>
    </MainContainer>
  );
};
