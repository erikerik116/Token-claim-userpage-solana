import kamabla from "../../assets/kamabla.png"
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Body = styled.div`
  font-family: 'New Amsterdam', sans-serif;
      color: chartreuse;
      background-color: #0d1117; /* Dark background color */
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      box-sizing: border-box;
      overflow: hidden;
`;
const TokenImg = styled.img`
    width: 100px;
    margin-bottom: 20px;
`
const Container = styled.div`
   width: 100%;
      max-width: 350px;
      text-align: center;
      background: #002b36; /* Dark green background */
      padding: 20px;
      border-radius: 8px;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5); /* Darker shadow for depth */
    
`
const Title = styled.h1`
  font-family: 'New Amsterdam', sans-serif;
      font-weight: 700;
      margin-bottom: 20px;
      font-size: 24px;
      color: #d5bf53; /* Gold color */
`

const SmallTitle = styled.p`
  font-size: 16px;
  color: #d5bf53; /* Gold color */
`
const Button = styled.button`
  padding: 10px;
      width: 100%;
      background-color: #d5bf53; /* Gold color */
      border: none;
      color: black;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px; /* Space between elements */
`

const Ton = () => {
  return (
    <>

      <Body>
        <Container>
          <TokenImg src={kamabla} />
          <Title>Coming Soon</Title>
          <SmallTitle>We're working hard to get this page ready. Stay tuned!</SmallTitle>
          <Link to="/"><Button>Back to Home</Button></Link>
        </Container>
      </Body>

    </>
  );
};

export default Ton;
