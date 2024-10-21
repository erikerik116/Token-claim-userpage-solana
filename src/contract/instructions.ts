import kamabla_idl from './idl/idl.json'
import { ComputeBudgetProgram, Connection, PublicKey, Transaction } from "@solana/web3.js"
import { Program, Idl, AnchorProvider, setProvider } from "@coral-xyz/anchor";
// import type { LockiToken } from "@/types";
import { AnchorWallet } from "@solana/wallet-adapter-react"
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction, getAssociatedTokenAddress } from "@solana/spl-token";
import { BN } from "bn.js";

const GLOBAL_SEED: string = "GLOBAL_SEED"
const programId = new PublicKey('3Rkvu1d2qsSTzNjqjeVD29h1HHNADY6NHh25BARHCCj2');
const mintaddress = new PublicKey('6BuKbBATFnUF34g97Vtni5Xq8qNyzYD412SaEBoStPKU');
// const amount = 15;
// const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');






export const getclaimtx = async (wallet: AnchorWallet, connection: Connection, amount: number) => {
    console.log("calling Claim...")
    console.log(wallet.publicKey.toBase58());
    console.log(connection);
    console.log(amount);
    try {
        if (!wallet.publicKey || !connection) {
            console.log("Warning:Wallet not connected")
            return
        }

        console.log(connection);
        console.log("==============", wallet);

        const provider = new AnchorProvider(connection, wallet, {});
        setProvider(provider);
        const program = new Program(kamabla_idl as Idl, programId);
        // const program = new Program(kamabla_idl as Idl) as Program<LockiToken>;

        console.log("Program programid", program.programId.toBase58())

        const [globalState] = PublicKey.findProgramAddressSync([Buffer.from(GLOBAL_SEED)], program.programId);

        console.log("🚀 ~ globalState:", globalState.toBase58());
        console.log("Program", program, "\n", wallet.publicKey.toBase58())

        const globalStateAta = await getAssociatedTokenAddress(mintaddress, globalState, true)
        const userAta = await getAssociatedTokenAddress(mintaddress, wallet.publicKey, true)

        const claimTx = new Transaction().add(
            ComputeBudgetProgram.setComputeUnitLimit({ units: 100_000 }),
            ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 200_000 }),)



        console.log("globalStateAta:", globalStateAta.toBase58())
        console.log(await connection.getAccountInfo(globalStateAta), "`````````~~~~~~~~~")


        if (await connection.getAccountInfo(userAta) == null) {
            console.log("User lock lp token for a first time")
            claimTx.add(createAssociatedTokenAccountInstruction(
                wallet.publicKey,
                userAta,
                wallet.publicKey,
                mintaddress,
                TOKEN_PROGRAM_ID,
                ASSOCIATED_TOKEN_PROGRAM_ID,
            ))
        }
        // const [vaultAta] = await PublicKey.findProgramAddress(
        //     [lockState.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
        //     ASSOCIATED_TOKEN_PROGRAM_ID
        // );

        console.log("userAta", userAta, userAta.toBase58())
        console.log("globalStateAta", globalStateAta, globalStateAta.toBase58())


        const _amount = new BN(amount).mul(new BN(10 ** 8))
        const instruction = await program.methods.claimToUser(_amount).accounts({
            globalState,
            mint: mintaddress,
            user: wallet.publicKey,
            globalStateTokenAccount: globalStateAta,
            userTokenAccount: userAta,
            tokenProgram: TOKEN_PROGRAM_ID,

        }).instruction()
        claimTx.add(instruction)
        console.log("🚀 ~ transaction:", claimTx)

        try {
            claimTx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
            claimTx.feePayer = wallet.publicKey
            console.log(await connection.simulateTransaction(claimTx))
            if (wallet.signTransaction) {
                const signedTx = await wallet.signTransaction(claimTx)
                const sTx = signedTx.serialize()
                const signature = await connection.sendRawTransaction(sTx, { skipPreflight: true })

                const blockhash = await connection.getLatestBlockhash()
                await connection.confirmTransaction({
                    signature,
                    blockhash: blockhash.blockhash,
                    lastValidBlockHeight: blockhash.lastValidBlockHeight
                }, "confirmed");
                console.log("Successfully initialized.\n Signature: ", signature);
                return signature;
            }
        } catch (error) {
            console.log("Error in lock transaction", error)
        }

    } catch (error) {
        console.log("Error in making initialize transaction", error)
        return
    }
}