//rafce si instalas S7

import React from 'react'
import CartWidget from './CartWidget'
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'




const NavBar = () => {
 
  return (
    <div>
    <Container maxW='100rem' bg='blue.600' color='white'>
    <Flex>
    <Box p="2" color={"white"}>
    <Heading  size="md">E Commerce</Heading>
    </Box>
    <Spacer />

    <Box p="2" color={"white"}>
    <CartWidget />
    </Box>

    </Flex>
    </Container>

    

    </div>    
    
  )
}

export default NavBar

 