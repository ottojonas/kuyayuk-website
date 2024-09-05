import { Badge, Button, Container, List, ListItem } from '@chakra-ui/react'
import { Title, ProductImage, Meta } from '../../components/product.js'
import Layout from '../../components/layouts/article.js'
import P from '../../components/paragraph.js'

const Product = () => {
  return (
    <Layout title="Ashwaganda">
      <Title>
        Ashwaganda<Badge>Healing</Badge>
      </Title>
      <ProductImage
        src="/images/ashwaganda/ashwagandaImage.jpg"
        alt="ashwagandaImage"
      />
      <P>placeholder for ashwaganda information</P>
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
    </Layout>
  )
}

export default Product
