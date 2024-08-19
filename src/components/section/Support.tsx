import styled from "styled-components";
import Icon from "../../assets/img/main/black_icon.png";
// import { MainContainer } from "./hello";
// import { Container } from "./hello";
import { Content } from "./hello";
import { Image } from "./hello";
import { Title } from "./hello";
import { TitleClass } from "./hello";
import { TitleImage } from "./hello";
import { Span } from "./hello";
import { ButtonStructure } from "./tangible";

const MainContainer = styled.div`
  max-width: 100vw;
  height: 843px;
  background-color: #fffad0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: inset 0 3px 1px -1px #252525;
  gap: 38px;

  @media (max-width: 1279px) {
    height: fit-content;
    padding: 100px 0;
  }

  @media (max-width: 640px) {
    padding: 58px 0;
    gap: 18px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    width: calc(100vw - 36px);
    gap: 16px;
  }
`;
export const Support = () => {
  return (
    <MainContainer>
      <Container>
        <TitleClass>
          <TitleImage src={Icon} />
          <Title>
            Supporting
            <Span>
              <Image src={Icon} />
            </Span>
            Koala konservation
          </Title>
        </TitleClass>
        <Content style={{ maxWidth: 710 }}>
          At Kiki Koalas, we're dedicated to protecting koalas from the wild and
          natural disasters in Australia. We will donate a portion of our raised
          funds to koala conservation efforts, helping to ensure their safety
          and survival. By collecting Kiki Koalas NFTs, you contribute to this
          vital cause, making a difference in the lives of these beloved
          Australian icons.
        </Content>
        <ButtonStructure>LEARN MORE</ButtonStructure>
      </Container>
    </MainContainer>
  );
};
