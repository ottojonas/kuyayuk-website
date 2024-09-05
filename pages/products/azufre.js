import { Badge, Button, Container, List, ListItem } from '@chakra-ui/react'
import { Title, ProductImage, Meta } from '../../components/product'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
const Product = () => {
  return (
    <Layout title="Azufre">
      <Container>
        <Title>
          Azufre <Badge>Healing</Badge>
        </Title>
        <ProductImage
          src="/images/azufre/azufreImage01.jpg"
          alt="azufreImage"
        />
        <P>placeholder for azufre information</P>
        <Button colorScheme="teal">Buy Now</Button>
        <List>
          <ListItem>
            <Meta>Origin</Meta>
            <span>Country of Origin</span>
          </ListItem>
          <ListItem>
            <Meta>How To Use</Meta>
            <span>How to use information</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Product
