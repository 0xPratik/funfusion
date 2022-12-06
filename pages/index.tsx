import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import {ApproveCollectionAuthorityInstructionAccounts} from "../token-metadata/src/generated"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Home() {
  return (
    <Box w='100vw' h='100vh' bg='orange'>
      <WalletMultiButton />
    </Box>
  )
}
