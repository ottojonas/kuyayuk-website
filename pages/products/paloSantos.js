import { Title, ProductImage, Meta } from '../../components/product'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Badge, Container, ListItem, List, Button } from '@chakra-ui/react'

const Product = () => (
  <Layout title="Palo Santos">
    <Container>
      <Title>
        Palo Santos<Badge>Healing</Badge>
      </Title>
      <ProductImage
        src="/images/paloSantos/paloSantosInABox.jpg"
        alt="paloSantosInABox"
      />
      <P>palo santos information placeholder</P>
      <Button colorScheme="teal">Buy Now</Button>
      <List>
        <ListItem>
          <Meta>Origin</Meta>
          <span>Country of Origin</span>
          <Meta>How To Use</Meta>
          <span>How to use information</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Product
