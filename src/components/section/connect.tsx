import styled from "styled-components";
import Icon from "../../assets/img/main/black_icon.png";
// import { Content } from "./hello";
import { Image } from "./hello";
import { Title } from "./hello";
import { ActionIcon } from "./tangible";
import { TitleClass } from "./hello";
import { TitleImage } from "./hello";
import { Span } from "./hello";
import TwitterX from "../../assets/img/main/x-twitter-brands-solid.svg";
import Telegram from "../../assets/img/main/telegram-brands-solid.svg";
import Discord from "../../assets/img/main/discord-brands-solid.svg";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 672px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  box-shadow: inset 0 3px 1px -1px #252525;

  @media (max-width: 1279px) {
    height: fit-content;
    padding: 100px 0;
  }

  @media (max-width: 640px) {
    padding: 58px 0;
    gap: 18px;
  }
`;

const CardMainContainer = styled.div<{ $angle: string }>`
  transition: 0.2s all;
  cursor: pointer;
  rotate: ${({ $angle }) => $angle}deg;

  filter: drop-shadow(4px 4px 0px #000);

  @media (max-width: 640px) {
    filter: drop-shadow(3px 3px 0px #000);
  }

  &:hover {
    filter: drop-shadow(2px 2px 0px #000);

    @media (max-width: 640px) {
      filter: drop-shadow(2px 2px 0px #000);
    }
    rotate: 0deg;
  }

  &:active {
    filter: drop-shadow(0 0 0px #000);

    @media (max-width: 640px) {
      filter: drop-shadow(0 0 0px #000);
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 183px;
  padding: 17px 15px 24px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 20px;
  border: 3px solid #000;
  background: #fff;
  box-sizing: border-box;
  transition: 0.2s all;
  position: relative;

  &:hover {
    transform: translateX(2px) translateY(2px);

    ${ActionIcon} {
      rotate: 10deg;
    }

    @media (max-width: 640px) {
      transform: translateX(1px) translateY(1px);
    }
  }

  &:active {
    transform: translateX(4px) translateY(4px);

    @media (max-width: 640px) {
      transform: translateX(3px) translateY(3px);
    }
  }

  @media (max-width: 640px) {
    width: 148px;
    padding: 14px 12px 20px;
    gap: 12px;
  }
`;

const CardTitle = styled.h3`
  color: #252525;
  text-align: center;
  font-family: Matter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`;

const CardBanner = styled.div<{ $color: string }>`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 3px solid #252525;
  background: ${({ $color }) => $color};

  @media (max-width: 640px) {
    height: 105px;
  }
`;

const Cards = styled.div`
  width: calc(100% - 36px);
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const SocialCard = ({ type }: { type: string }) => {
  return (
    <CardMainContainer
      $angle={type === "twitter" ? "5" : type === "telegram" ? "-6" : "0"}
    >
      <CardContainer>
        {/* {type !== "twitter" && <ActionIcon>soon</ActionIcon>} */}
        <CardBanner
          $color={
            type === "twitter"
              ? "#000"
              : type === "telegram"
              ? "#0094FF"
              : "#5F70F5"
          }
        >
          <img
            src={
              type === "twitter"
                ? TwitterX
                : type === "telegram"
                ? Telegram
                : Discord
            }
            alt="icon"
            style={{ filter: "invert(100%)", width: "70px" }}
          />
        </CardBanner>
        <CardTitle>{type}</CardTitle>
      </CardContainer>
    </CardMainContainer>
  );
};

export const Connect = () => {
  return (
    <MainContainer>
      <TitleClass>
        <TitleImage src={Icon} />
        <Title>
          Konnect
          <Span>
            <Image src={Icon} />
          </Span>
          with us
        </Title>
      </TitleClass>
      <Cards>
        <SocialCard type="twitter" />
        <SocialCard type="discord" />
        <SocialCard type="telegram" />
      </Cards>
    </MainContainer>
  );
};
