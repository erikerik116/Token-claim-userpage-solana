// import React, { useMemo, ReactNode } from "react";
// import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// // import { clusterApiUrl } from "@solana/web3.js";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {

//   SolflareWalletAdapter,
// } from "@solana/wallet-adapter-wallets";
// import "@solana/wallet-adapter-react-ui/styles.css";
// import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
// // const network = WalletAdapterNetwork.Mainnet; // Use MainnetBeta or Testnet as needed
// // const endpoint = clusterApiUrl(network);
// const endpoint = "https://solana-mainnet.g.alchemy.com/v2/HPBJFOauHz3LPGOp0JIOHe1FnPuk5q2q";

// interface WalletProviderProps {
//   children: ReactNode;
// }

// const WalletProviderComponent: React.FC<WalletProviderProps> = ({
//   children,
// }) => {
//   const network = WalletAdapterNetwork.Mainnet;

//   // const wallets = [new SolflareWalletAdapter()];
//   const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], [network]);

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>{children}</WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// };

// export default WalletProviderComponent;
import React, { ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// import { clusterApiUrl } from "@solana/web3.js";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

// const network = WalletAdapterNetwork.Devnet; // Use MainnetBeta or Testnet as needed
const endpoint = "https://solana-mainnet.g.alchemy.com/v2/HPBJFOauHz3LPGOp0JIOHe1FnPuk5q2q";

interface WalletProviderProps {
  children: ReactNode;
}
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const WalletProviderComponent: React.FC<WalletProviderProps> = ({
  children,
}) => {
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={!isMobile}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletProviderComponent;
