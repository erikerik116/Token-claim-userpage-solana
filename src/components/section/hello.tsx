import styled from "styled-components";
import icon from "../../assets/img/main/icon.png";

export const MainContainer = styled.div`
  max-width: 100vw;
  height: 746px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and(max-width:640px) {
    height: 671px;
  }
`;

export const Container = styled.div`
  width: 710px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    width: calc(100vw - 36px);

    gap: 16px;
  }
`;

export const Content = styled.p`
  color: rgb(37, 37, 37);
  text-align: center;
  font-family: Rubik;
  font-size: 26px;
  font-weight: 400;
  line-height: normal;
  margin: 0px;

  @media only screen and (max-width: 640px) {
    font-size: 22px;
  }
`;

export const Image = styled.img`
  height: 94px;
  position: absolute;
  left: 0;

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;
export const TitleClass = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 640px) {
    gap: 18px;
  }
`;

export const TitleImage = styled.img`
  height: 94px;
  width: auto;
  display: none;
  aspect-ratio: 60/94;

  @media only screen and (max-width: 640px) {
    display: block;
  }
`;

export const Title = styled.div`
  color: #252525;
  text-align: center;
  font-family: BarricadaW01-Regular;
  /* font-family: sans-serif; */
  font-size: 86px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (max-width: 1000px) {
    font-size: 58px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 46px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 36px;
  }
`;

export const Span = styled.span`
  position: relative;
  width: 60px;
  padding: 0 30px;

  @media only screen and (max-width: 640px) {
    padding: 0;
  }
`;
export const Hello = () => {
  return (
    <MainContainer>
      <Container>
        <TitleClass>
          <TitleImage src={icon} />
          <Title>
            Say hello to the Kiki
            <Span>
              <Image src={icon} />
            </Span>
            Koalas
          </Title>
        </TitleClass>
        <Content>
          Introducing the Kiki Koalas – 3,333 adorable Koalas that kick back at
          the Kiki Kollective! The Kiki Koalas are not only about the 3D art;
          it's about nurturing a welcoming and tightly-knit community. Each Kiki
          Koala brings us together, forming bonds and friendships that transcend
          pixels and screens.
        </Content>
      </Container>
    </MainContainer>
  );
};
