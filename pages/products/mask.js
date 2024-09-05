import { Title, ProductImage, Meta } from '../../components/product'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Container, ListItem, Badge, Button, List } from '@chakra-ui/react'

const Product = () => (
  <Layout title="Mask">
    <Container>
      <Title>
        Mask<Badge>Clothing</Badge>
      </Title>
      <ProductImage src="/images/masks/devilMask.jpg" alt="maskTemp" />
      <P>mask information placeholder</P>
      <Button colorScheme="teal">Buy Now</Button>
      <List>
        <ListItem>
          <Meta>Origin</Meta>
          <span>Country of Origin</span>
        </ListItem>
        <ListItem>
          <Meta>How to Use</Meta>
          <span>How to use information</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Product
