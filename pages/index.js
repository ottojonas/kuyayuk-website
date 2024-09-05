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
import Section from '../components/section'
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
        Welcome to KuyayUK
      </Box>

      <Box>
        <Box>
          <Heading>KuyayUK</Heading>
          <p>Peruvian culture brought to you</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Kuyay
        </Heading>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Popular Products
        </Heading>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.instagram.com/kuyay.uk/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @kuyayuk
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>Hear about updates and upcoming releases</p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/"
            scroll={false}
            leftIcon={<Icon as={EmailIcon} />}
            colorScheme="teal"
          >
            Sign up to our newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
