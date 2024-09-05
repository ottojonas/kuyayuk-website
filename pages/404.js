import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>Could not find selected page</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to Home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
