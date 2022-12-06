import React, { useMemo } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

require('@solana/wallet-adapter-react-ui/styles.css');


type WalletWrapperType = {
    children: React.ReactNode
}


function WalletWrapper({children}:WalletWrapperType) {

    const endpoint = "http://127.0.0.1:8899"

    const wallets = useMemo(
        () => [
        new PhantomWalletAdapter(),
        new GlowWalletAdapter(),
        new SlopeWalletAdapter(),
        new TorusWalletAdapter(),
        ],
        [endpoint]
      );
  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
            {children}
        </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default WalletWrapper