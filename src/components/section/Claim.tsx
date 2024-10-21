import { useEffect } from "react";

import { getclaimtx } from "../../contract/instructions"
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react"
import { useUserContext } from "../../contexts/UserContext";
import { useWallet } from "@solana/wallet-adapter-react";
// import { PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


const Claim = () => {
    const { publicKey, connected } = useWallet();
    const { connection } = useConnection()
    const wallet = useAnchorWallet();
    const { setIsConnected, setPubkey } = useUserContext();


    const amount = 37;


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
        try {

            await getclaimtx(wallet, connection, amount)
        } catch (error) {
            console.log("On Claim error ", error)
            return
        }


    }




    return (
        <>
            <WalletMultiButton />

            <button onClick={onclaim} disabled={!connected || !wallet}>Claim 4 token</button>
        </>
    )
}

export default Claim