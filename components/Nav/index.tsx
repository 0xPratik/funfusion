import { Flex, Heading } from '@chakra-ui/react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'

function Nav() {
  return (
    <Flex maxH="10vh" align='center' justify={"space-between"} p={4}>
    <Heading>Fusion</Heading>
    <WalletMultiButton />
</Flex>
  )
}

export default Nav