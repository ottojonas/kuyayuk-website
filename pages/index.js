import React from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoInstagram } from 'react-icons/io5'
import { EmailIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Welcome to Kuyay
      </Box>
      <Box>
        <Box>
          <Heading>KuyayUK</Heading>
          <p>Peruvian culture brought to you</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
