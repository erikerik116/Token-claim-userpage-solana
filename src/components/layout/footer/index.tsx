import styled from "styled-components";
import LogoIcon from "../../../features/icon/logo";
// import { Subtitle } from "../../section/pixel";
import TwitterX from "../../../assets/img/main/x-twitter-brands-solid.svg";
import Discord from "../../../assets/img/main/discord-brands-solid.svg";

const FooterMainContainer = styled.div`
  max-width: 100vw;
  box-shadow: inset 0 5px 1px -1px #252525;
  background-color: #f8d467;
`;

const MainContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 54px 54px 44px;

  display: flex;
  justify-content: space-between;

  gap: 54px;

  @media (max-width: 640px) {
    gap: 39px;
    padding: 54px 37px 44px;
    flex-direction: column;
  }
`;
const FooterLeftSide = styled.div``;
const FooterLogoBar = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  @media (max-width: 640px) {
    justify-content: center;
  }
`;
const FooterLinkItem = styled.p`
  font-family: Rubik;
  color: #252525;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    color: white;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    font-size: 22px;
  }
`;
const FooterBLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const FooterBLinkItem = styled.div`
  font-family: Rubik;
  color: #252525;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    color: white;
  }
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;
const FooterRightSide = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 640px) {
    justify-content: center;
    align-items: center;
  }
`;

const LogoText = styled.h2`
  color: #000;
  font-family: BarricadaW01-Regular;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  @media (max-width: 640px) {
    text-align: center;
  }
`;
const FooterLogo = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 16px;
  background-color: white;
  justify-content: center;
  border: 1px solid #252525;
  cursor: pointer;
  transition: 0.2s all;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px black;

  &:hover {
    background-color: #e0ddec;
    transform: translateY(2px);
    box-shadow: 3px 3px black;
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 1px 1px black;
  }
  /* @media (max-width: 640px) {
    width: 52px;
    height: 52px;
    box-shadow: 3px 3px black;

    &:hover {
      background-color: #e0ddec;
      transform: translateY(2px);
      box-shadow: 2px 2px black;
    }

    &:active {
      transform: translateY(4px);
      box-shadow: 1px 1px black;
    }
  } */
`;

export const SocialBtn = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  border: 1px solid #252525;
  cursor: pointer;
  transition: 0.2s all;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 5px black;

  &:hover {
    background-color: #e0ddec;
    transform: translateY(2px);
    box-shadow: 1px 3px black;
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 1px 1px black;
  }
`;
export const SocialBtnImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const Footertitle = styled.h2`
  max-width: 710px;
  color: #252525;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  text-align: left;
  /* @media only screen and (max-width: 1279px) {
    
  } */

  @media only screen and (max-width: 640px) {
    font-size: 22px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterMainContainer>
      <MainContainer>
        <FooterLeftSide>
          <FooterLogoBar>
            <FooterLogo>
              <LogoIcon />
            </FooterLogo>
            <LogoText>kiki koalas</LogoText>
          </FooterLogoBar>

          <Footertitle>
            Kick back with 3,333 Kiki Koalas, as we create an ecosystem that
            forms a community beyond pixels.
          </Footertitle>
          <FooterLinks>
            <FooterLinkItem>Home</FooterLinkItem>
            <FooterLinkItem>Art</FooterLinkItem>
            <FooterLinkItem>Team</FooterLinkItem>
            <FooterLinkItem>FAQs</FooterLinkItem>
          </FooterLinks>

          <FooterBLinks>
            <FooterBLinkItem>Privacy policy</FooterBLinkItem>
            <FooterBLinkItem>Terms of service</FooterBLinkItem>
          </FooterBLinks>
        </FooterLeftSide>
        <FooterRightSide>
          <SocialBtn>
            <SocialBtnImg src={TwitterX} alt="TwitterX" />
          </SocialBtn>
          <SocialBtn>
            <SocialBtnImg src={Discord} alt="Discord" />
          </SocialBtn>
        </FooterRightSide>
      </MainContainer>
    </FooterMainContainer>
  );
};
export default Footer;
