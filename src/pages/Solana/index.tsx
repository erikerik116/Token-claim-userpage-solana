
import { useState, useEffect } from 'react';
import kamabla from "../../assets/kamabla.png";
import styled from "styled-components";
import { useConnection } from "@solana/wallet-adapter-react"
import { useUserContext } from "../../contexts/UserContext";
import { useWallet } from "@solana/wallet-adapter-react";
import { getclaimtx } from "../../contract/instructions"
import axios from 'axios';
// import { WalletConnectionProvider } from './WalletConnectionProvider';
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';


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

const Link = styled.a`
  font-size: 12px;
  color: #d5bf53; /* Gold color */
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

      &:disabled {
        background-color: #555; /* Darker gray */
  }  
`

const Input = styled.input`
  padding: 10px;
      width: 100%;
      margin-bottom: 10px;
      border: 1px solid #444; /* Darker border */
      border-radius: 4px;
      box-sizing: border-box;
      color: #fff;
      background-color: #1f2937; /* Darker input background */
`
const Status = styled.p`
  margin-top: 20px;
      font-size: 12px;
      color: #ffffff;
`


const Instructions = styled.div`
  margin-top: 20px;
      font-size: 12px;
      color: #d5bf53; /* Gold color */
      font-family: initial;
`

const Loading = styled.p`
  font-size: 16px;
  color: #007bff;
  display: none;
`


const Solana = () => {

  const { publicKey, connected } = useWallet();
  const { connection } = useConnection()
  const wallet = useWallet();
  const { setIsConnected, setPubkey } = useUserContext();
  const [account, setAccount] = useState('');
  const [status, setStatus] = useState('Disconnected');
  const [walletChecked, setWalletChecked] = useState<boolean>(false); // State to track wallet check

  const apigetUrl = "https://backend.tapbot.online/get-points";
  const apiupdateUrl = "https://backend.tapbot.online/reset";
  console.log(account);
  console.log(status);
  useEffect(() => {
    setIsConnected(connected);
    if (!publicKey) {
      console.log("Wallet not connected")

    } else {
      setPubkey(publicKey);
    }
  }, [connected]);

  useEffect(() => {
    console.log('environment files ===> ', apigetUrl)
  }, [])

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const UIwallet = window.solana;
        await UIwallet.connect();

        const account = UIwallet.publicKey.toString();
        console.log(account);
        setAccount(account);
        setStatus(`Connected: ${account}`);
        localStorage.setItem('account', account);
        // setClaimEnabled(true);
        document.getElementById('connectButton')!.textContent = 'Connected';
        const connectButton = document.getElementById('connectButton') as HTMLButtonElement | null;
        if (connectButton) {
          connectButton.textContent = 'Connected';
          connectButton.disabled = true;
        }
        document.getElementById('status')!.innerText = `Connected: ${account}`;
        const claimButton = document.getElementById('claimButton') as HTMLButtonElement | null;
        if (claimButton) {
          claimButton.disabled = false;
          claimButton.addEventListener('click', claimTokens);
        }
        alert('Please enter your Telegram ID.');

        // Initialize connection
        // const connection = new Connection(clusterApiUrl('devnet'));
        // setConnection(new Connection(clusterApiUrl('testnet')));Z
        // updateClaimTimer();

      } catch (error) {
        console.error('Error connecting to Phantom:', error);
        alert('Failed to connect to Phantom. Please try again.');
      }
      console.log(window.solana);
      console.log(apigetUrl);
    } else {
      alert('No Solana wallet detected. Please install Phantom or another compatible wallet.');
      setWalletChecked(true);
    }
  };

  useEffect(() => {
    setIsConnected(connected);
    if (!publicKey) {
      console.log("Wallet not connected")
    } else {
      setPubkey(publicKey);
    }
  }, [connected]);


  async function claimTokens() {

    const telegramIdElement = document.getElementById('telegramId') as HTMLInputElement;
    const telegramId = telegramIdElement ? telegramIdElement.value.trim() : '';

    if (!wallet || !wallet.publicKey) {
      alert('Please connect your wallet first.');
      return;
    }

    console.log('test-telegramID', telegramId)

    if (!telegramId) {
      alert('Please enter your Telegram ID.');
      return;
    }
    const claimButtonElement = document.getElementById('claimButton');
    const loadingMessage = document.getElementById('loadingMessage');

    if (claimButtonElement instanceof HTMLButtonElement) {
      claimButtonElement.disabled = true;
    }
    if (loadingMessage instanceof HTMLElement) {
      loadingMessage.style.display = 'block';
    }
    console.log(telegramId);
    try {
      const res = await axios.post(`${apigetUrl}`, {
        telegramId: telegramId
      })

      const data = await res.data as { success: boolean; balance: number; time: string | number };
      console.log(res); // Handle the response data as needed
      console.log(data); // Handle the response data as needed

      if (data.success) {
        const balance = data.balance;

        if (balance < 1000) {
          alert('Insufficient balance. You need at least 1000 Points to claim.');
          return;
        }

        // Calculate the claimable amount
        const pointsPerToken = 10;
        const tokensPerPoint = 1 / pointsPerToken;
        const claimableAmount = (balance * tokensPerPoint).toFixed(2); // Use toFixed for two decimal places
        const claimableAmountNumber = parseFloat(claimableAmount); // Convert the string to a number


        alert(`Claim ${claimableAmountNumber} Tokens`);

        // Add your token claiming logic here, for example interacting with a Solana program

        try {



          // Await the claim transaction
          // @ts-ignore
          const sig = await getclaimtx(wallet, connection, claimableAmountNumber);

          // If the transaction is successful, make the POST request
          if (sig) {
            const res = await axios.post(`${apiupdateUrl}`, {
              telegramId: telegramId
            });
            document.getElementById('status')!.innerText = `Tokens claimed successfully!`;
            // updateClaimTimer(); // Update the timer after a successful claim
            console.log('Post request successful:', res.data);  // Log the response from the POST request
          }

        } catch (error) {
          console.log("On Claim error", error);
          // Stop execution if an error occurs
          return;
        }
        //   // Use the web3.js methods to send transactions.
      } else {
        document.getElementById('status')!.innerText = `Error: ${data}`;
      }
    } catch (error) {
      console.error('Error claiming tokens:', error);
      alert('Failed to claim tokens. Please try again.');
    } finally {

      if (claimButtonElement instanceof HTMLButtonElement) {
        claimButtonElement.disabled = false;
      }
      const claimButton = document.getElementById('claimButton');
      if (claimButton) {
        claimButton.style.display = 'none';
      } else {
        console.error('claimButton element not found');
      }
    }

    console.log("successs");
  }

  // async function getLastClaimTime() {
  //   // const telegramId = document.getElementById('telegramId').value.trim();
  //   const telegramIdElement = document.getElementById('telegramId') as HTMLInputElement;
  //   const telegramId = telegramIdElement ? telegramIdElement.value.trim() : '';

  //   if (!telegramId) {
  //     // alert('Please enter your Telegram ID.');
  //     return null;
  //   }

  //   try {
  //     const res = await axios.post(`${apigetUrl}`, {
  //       telegramId: telegramId
  //     });

  //     const data = res.data as { success: boolean; balance: number; time: string | number };
  //     if (data.success) {
  //       // Assuming data.time is either a string or a timestamp
  //       return parseInt(data.time.toString(), 10);
  //     } else {
  //       alert('Failed to get claim time. Please try again.');
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error('Error fetching last claim time:', error);
  //     // alert('Error fetching claim time. Please try again.');
  //     return null;
  //   }

  // }

  // function updateClaimTimer() {
  //   getLastClaimTime().then(lastClaimTime => {
  //     if (lastClaimTime !== null) {
  //       const currentTime = Math.floor(Date.now() / 1000);
  //       const nextClaimTime = lastClaimTime + cooldownPeriod;

  //       if (currentTime >= nextClaimTime) {
  //         const timeRemainingElement = document.getElementById('timeRemaining') as HTMLDivElement;
  //         if (timeRemainingElement) {
  //           timeRemainingElement.innerText = 'You can claim tokens now.';
  //         }
  //       } else {
  //         const timeRemaining = nextClaimTime - currentTime;
  //         const hours = Math.floor(timeRemaining / 3600);
  //         const minutes = Math.floor((timeRemaining % 3600) / 60);
  //         const seconds = timeRemaining % 60;
  //         const timeRemainingElement = document.getElementById('timeRemaining');
  //         if (timeRemainingElement) {
  //           timeRemainingElement.innerText = `Next claim in: ${hours}h ${minutes}m ${seconds}s`;
  //         }
  //       }
  //     }
  //   });
  // }

  // useEffect(() => {
  //   const connectWallet = async () => {
  //     // if (window.solana && window.solana.isPhantom) {
  //     try {
  //       const wallet = window.solana;
  //       await wallet.connect();
  //       const account = wallet.publicKey.toString();
  //       console.log(account);

  //       // Safely get the saved account, default to empty string if null
  //       const savedAccount = localStorage.getItem('account') || '';
  //       console.log(savedAccount);

  //       if (savedAccount === account) {
  //         setAccount(savedAccount);
  //         setIsConnected(true);
  //         // setClaimEnabled(true);
  //         // setConnection(new Connection(clusterApiUrl('testnet')));
  //         updateClaimTimer(); // Call your timer function here
  //       } else {
  //         alert(account);
  //       }
  //       console.log("Wallet connected")
  //     } catch (error) {
  //       console.error('Error connecting to Phantom:', error);
  //     }
  //     // } else {
  //     //   alert('No Solana wallet detected. Please install Phantom or another compatible wallet.');
  //     // }
  //   };

  //   connectWallet();
  // }, []); // Runs once on mount


  return (



    <Body>
      <Container>
        <Title>CLAIM KAMABLA TOKENS</Title>
        <h2>10 POINTS = 1 $KAMABLA</h2>
        <TokenImg src={kamabla} />
        <div id="walletLinks">
          {walletChecked && !window.solana?.isPhantom && (
            <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '8px', padding: '20px', margin: '20px 0', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
              <p style={{ fontSize: '18px', fontWeight: '500', color: '#333', marginBottom: '15px' }}>
                No wallet detected. Open this DApp using the buttons below:
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <a href="https://phantom.app/en-GB/download" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
                    Open in Phantom
                  </button>
                </a>
                <a href="https://solflare.com/onboard" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff', backgroundColor: '#28a745', padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
                    Open in Solflare
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
        <Button id="connectButton" onClick={connectWallet}>Connect Wallet</Button>

        <p id="timeRemaining"></p>

        <Input type="text" id="telegramId" placeholder="Enter your Telegram ID" />
        <Button id="claimButton" disabled onClick={claimTokens}>Claim Tokens</Button>
        <Status id="status"></Status>
        <Loading className="loading">Processing...</Loading>
        <Instructions>
          <Title>FAQ</Title>
          <h2>How to Get Your Telegram ID:</h2>
          <SmallTitle>1. Open Telegram and search for the bot <Link href="https://t.me/userinfobot" target="_blank"><b>@userinfobot</b></Link>.</SmallTitle>
          <SmallTitle>2. Start a chat with the bot by clicking <i>/start</i>.</SmallTitle>
          <SmallTitle>3. The bot will reply with your Telegram ID. Copy that ID and paste it here.</SmallTitle>
        </Instructions>
      </Container>
    </Body >

  );
};


export default Solana;
