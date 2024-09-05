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
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { GridItem } from '../components/grid-items'
import Section from '../components/section'
import { IoLogoInstagram } from 'react-icons/io5'
import { EmailIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import NextLink from 'next/link'
import paloSantosThumbnail from '../public/images/paloSantos/paloSantosBuring01.jpg'
import azufreThumbnail from '../public/images/azufre/azufreImage02.jpg'

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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/icons/inspo/logoTemplate.png"
              alt="frontImage"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Kuyay
        </Heading>
        <p>
          Providing an authentic and original Peruvian experience to those who
          want to give it a try.
        </p>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Popular Products
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/products/paloSantos"
            title="Palo Santos"
            thumbnail={paloSantosThumbnail}
          ></GridItem>
          <GridItem
            href="/products/azufre"
            title="Azufre"
            thumbnail={azufreThumbnail}
          ></GridItem>
        </SimpleGrid>
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
          <ListItem>
            <Link href="mailto:kuyayuk@outlook.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={EmailIcon} />}
              >
                Email
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
