import { Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkGridItem } from '../../components/grid-items'
import paloSantosThumbnail from '../../public/images/paloSantos/paloSantosBuring01.jpg'
import Section from '../../components/section'

const Category = () => {
  return (
    <Layout title="Spiritual">
      <Heading as="h3" fontSize={20} mb={4}>
        Spritual Items
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="paloSantos"
            title="Palo Santos"
            thumbnail={paloSantosThumbnail}
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Layout>
  )
}

export default Category
