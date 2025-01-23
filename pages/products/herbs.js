import { Badge, Button, Container, List, ListItem } from '@chakra-ui/react'
import { Title, ProductImage, Meta } from '../../components/product.js'
import Layout from '../../components/layouts/article.js'
import P from '../../components/paragraph.js'

const Product = () => {
  return (
    <Layout title="Herb">
      <Title>
        Herbs<Badge>Herbal</Badge>
        <ProductImage src="" alt="" />
        <P>
          This plant is known as one of the best laxatives or purgatives. It
          eliminates all kinds of parasites, including and not limited to:
          tapeworm, oxshuro, ascaris and Trichuris
        </P>
        <Button colorScheme="teal">Buy Now</Button>
        <List>
          <ListItem>
            <Meta>Origin</Meta>
            <span>Country of Origin</span>
          </ListItem>
          <ListItem>
            <Meta>How to Use</Meta>
            <span>
              Boil 1/3 of the senna leaves in a 1/4 liter of water <br />
              Drinkk on an empty stomach 3 times a week.
            </span>
          </ListItem>
        </List>
      </Title>
    </Layout>
  )
}

export default Product
