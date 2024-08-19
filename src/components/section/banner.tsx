import styled from "styled-components";
import start from "../../assets/img/main/text_start.png";
import end from "../../assets/img/main/text_end.png";
import mobile from "../../assets/img/main/min_text.png";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 959px;
  background-color: #f8d467;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 640px) {
    height: 624px;
  }

  &:before {
    position: absolute;
    content: "";
    background: url("banner.png");
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: center;

    @media only screen and (max-width: 640px) {
      background: url("min_banner.png");
      background-repeat: no-repeat;
      background-position: bottom;
    }
  }
`;
const Titlediv = styled.div`
  padding-top: 200px;
  position: relative;
  z-index: 2;
  width: calc(100%-40px);

  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
const MobileTitle = styled.div`
  padding-top: 200px;
  position: relative;
  z-index: 2;
  width: calc(100%-40px);

  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;
const StartTitle = styled.img`
  height: 120px;
`;
const EndTitle = styled.img`
  height: 120px;
`;

const SmallTitle = styled.img`
  height: 120px;
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;
export const Banner = () => {
  return (
    <MainContainer>
      <Titlediv>
        <StartTitle src={start} />
        <EndTitle src={end} />
      </Titlediv>
      <MobileTitle>
        <SmallTitle src={mobile} />
      </MobileTitle>
    </MainContainer>
  );
};
