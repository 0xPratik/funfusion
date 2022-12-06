
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import WalletWrapper from '../components/Wallet'


export default function App({ Component, pageProps }: AppProps) {
return (  
  <ChakraProvider>
    <WalletWrapper>
  <Component {...pageProps} />
  </WalletWrapper>
</ChakraProvider>
)
}
