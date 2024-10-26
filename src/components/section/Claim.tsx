import { useEffect } from "react";
import styled from "styled-components";
import { getclaimtx } from "../../contract/instructions"
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react"
import { useUserContext } from "../../contexts/UserContext";
import { useWallet } from "@solana/wallet-adapter-react";
// import { PublicKey } from "@solana/web3.js";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import axios from 'axios';
type ClaimProps = {
    telegramId: string;
};
const Claim: React.FC<ClaimProps> = ({ telegramId }) => {
    const { publicKey, connected } = useWallet();
    const { connection } = useConnection()
    const wallet = useAnchorWallet();
    const { setIsConnected, setPubkey } = useUserContext();
    // const telegramId = 7414147552

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

    const apigetUrl = "https://backend.tapbot.online/get-points";
    const apiupdateUrl = "https://backend.tapbot.online/reset";



    useEffect(() => {
        setIsConnected(connected);
        if (!publicKey) {
            console.log("Wallet not connected")

        } else {
            setPubkey(publicKey);
        }
    }, [connected]);

    const onclaim = async () => {

        if (!wallet) {
            console.log("Wallet is not available");
            return; // Early return if wallet is not defined
        }

        if (!telegramId) {
            alert('Please enter your Telegram ID.');
            return;
        }

        try {
            const res = await axios.post(`${apigetUrl}`, {
                telegramId: telegramId
            })

            const data = await res.data as { success: boolean; balance: number; time: string | number };
            console.log(res); // Handle the response data as needed
            console.log(data); // Handle the response data as needed

            if (data.success) {
                const balance = data.balance;
                console.log("balance=========", balance);
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
        }

    }




    return (
        <>
            <Button onClick={onclaim} disabled={!connected || !wallet}>Claim token</Button>
        </>
    )
}

export default Claim