import { Title, ProductImage, Meta } from '../../components/product'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import {
  Badge,
  Button,
  Container,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const Product = () => (
  <Layout title="Palo Santos">
    <Container>
      <Title>
        Palo Santos<Badge>Spiritual</Badge>
      </Title>
      <ProductImage
        src="/images/paloSantos/paloSantosInABox.jpg"
        alt="paloSantosInABox"
      />
      <P>palo santos information placeholder</P>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="teal"
        >
          Contact Us
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="mailto:kuyayuk@outlook.com">
            Email
          </MenuItem>
          <MenuItem
            as="a"
            href="https://www.instagram.com/kuyay.uk"
            target="_blank"
          >
            Instagram
          </MenuItem>
        </MenuList>
      </Menu>
      <List>
        <ListItem>
          <Meta>Origin</Meta>
          <span>Peru</span>
        </ListItem>
        <ListItem>
          <Meta>How To Use</Meta>
          <span>How to use information</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Product
