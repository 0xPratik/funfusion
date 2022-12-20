import { Box,Flex,Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import Nav from '../components/Nav'

export default function Home() {

  const {publicKey} = useWallet()
  return (
    <Box w='100vw' h='100vh'>
      {/* NavBar */}
      <Nav />
      
    </Box>
  )
}
