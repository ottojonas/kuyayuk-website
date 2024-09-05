import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import paloSantosBurning from '../public/images/paloSantos/paloSantosBuring01.jpg'
import maskImage from '../public/images/masks/devilMask.jpg'
import azufreImage from '../public/images/azufre/azufreImage01.jpg'
import Layout from '../components/layouts/article'
const Products = () => {
  return (
    <Layout title="Products">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Products
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="paloSantos"
              title="Palo Santos"
              thumbnail={paloSantosBurning}
            ></WorkGridItem>
            <WorkGridItem
              id="mask"
              title="Mask"
              thumbnail={maskImage}
            ></WorkGridItem>
            <WorkGridItem
              id="azufre"
              title="Azufre"
              thumbnail={azufreImage}
            ></WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Products
