import styled from "styled-components";
import basic from "../../assets/img/main/basic.png";
import Rotate from "../../features/icon/rotate";
import Star from "../../features/icon/star";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 933px;
  background-color: #d7f6cb;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  box-shadow: inset 0 3px 1px -1px #252525;

  @media only screen and (max-width: 1279px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: fit-content;
    padding: 58px 0;
  }

  @media only screen and (max-width: 1279px) {
    padding: 120px 0;
  }
`;

const LeftSide = styled.div`
  align-self: center;
  justify-self: end;
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 620px;

  @media only screen and (max-width: 1279px) {
    justify-self: center;
    align-items: center;
  }

  @media only screen and (max-width: 640px) {
    gap: 18px;
    width: calc(100% - 36px);
  }
`;
export const TangibleTitle = styled.h2`
  margin: 0;
  color: #252525;
  font-family: BarricadaW01-Regular;
  font-size: 76px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  line-height: 1; //

  @media only screen and (max-width: 1279px) {
    text-align: center;
  }

  @media only screen and (max-width: 640px) {
    font-size: 46px;
  }
`;

export const Subtitle = styled.h3`
  color: #252525;
  font-family: Rubik;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media only screen and (max-width: 1279px) {
    text-align: center;
  }

  @media only screen and (max-width: 640px) {
    font-size: 22px;
  }
`;
export const ActionIcon = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  top: -15px;
  right: -5px;
  border-radius: 60px;
  border: 1px solid #252525;
  background-color: #f8d467;
  padding: 4px 8px;

  color: #252525;
  text-transform: uppercase;
  font-family: Bebas Neue;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: 0.2s all;
  rotate: -10deg;
`;
const BasicButton = styled.div`
  border-radius: 60px;
  border: 1px solid #252525;
  background-color: white;
  cursor: pointer;
`;
export const ButtonStructure = styled(BasicButton)`
  position: relative;
  width: fit-content;
  font-family: Bebas Neue;
  padding: 14px 30px;
  transition: 0.2s all;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 50px;
  box-shadow: 0 5px black;

  &:hover {
    background-color: #f8d467;
    transform: translateY(2px);
    box-shadow: 0 3px black;

    ${ActionIcon} {
      rotate: 10deg;
    }
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 0 1px black;
  }
  @media only screen and (max-width: 640px) {
    margin-left: 0px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  justify-self: start;
  margin-left: 80px;
  @media only screen and (max-width: 1279px) {
    margin-left: 0;
    justify-self: center;
  }
`;
const Img = styled.img`
  @media only screen and (max-width: 640px) {
    width: 170px;
  }
`;
export const Tangible = () => {
  return (
    <MainContainer>
      <LeftSide>
        <TangibleTitle>
          <Star />
        </TangibleTitle>
        <TangibleTitle>
          Kiki
          <br /> Kasino
        </TangibleTitle>

        <Subtitle>
          At Kiki Koalas, we believe in making your NFT ownership experience
          truly tangible. When you own a Kiki Koala, you unlock revenue
          distribution from the house earnings.
        </Subtitle>
        <ButtonStructure>
          30LIBRARY
          <ActionIcon>soon</ActionIcon>
        </ButtonStructure>
      </LeftSide>
      <RightSide>
        <Img src={basic} alt="libraryImg" />
        <ButtonStructure>
          <Rotate />
        </ButtonStructure>
      </RightSide>
    </MainContainer>
  );
};
