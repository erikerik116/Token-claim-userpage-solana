

import kamabla from "../../assets/kamabla.png";

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


const SmallTitle = styled.p`
  font-size: 12px;
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
      margin-bottom: 10px; /* Space between buttons */
`
const Instructions = styled.div`
  margin-top: 20px;
      font-size: 12px;
      color: #d5bf53; /* Gold color */
      font-family: initial;
`


const Home = () => {
  return (
    <Body>
      <Container>
        <TokenImg src={kamabla} />
        <Instructions>
          <SmallTitle>Claim your $KAMABLA tokens using a Solana wallet.</SmallTitle>
          <Link to="/solana"><Button>Claim Now</Button></Link>
          {/* <Link to="/bscscan"><Button>Bscscan</Button></Link>
          <Link to="/ton"><Button>Ton</Button></Link>
          <Link to="/pulsechain"><Button>Pulsechain</Button></Link> */}
        </Instructions>
      </Container>
    </Body>
  );
};

export default Home;
