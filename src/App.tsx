// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { clusterApiUrl } from '@solana/web3.js';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import WalletProviderComponent from "../src/components/section/WalletProvider.tsx";
import { MainRouter } from "./routes/index.tsx";
import { Buffer } from 'buffer';
import { UserProvider } from "./contexts/UserContext";
window.Buffer = Buffer;

function App() {
  // const network = clusterApiUrl('devnet');
  // const wallets = [
  //   new PhantomWalletAdapter(),
  //   // Add more adapters as needed
  // ];

  return (
    <UserProvider>
      <WalletProviderComponent>

        <MainRouter />
      </WalletProviderComponent>
    </UserProvider>
  );
}

export default App;
