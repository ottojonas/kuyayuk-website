import { Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkGridItem } from '../../components/grid-items'
import azufreThumbnail from '../../public/images/azufre/azufreImage02.jpg'
import Section from '../../components/section'

const Category = () => {
  return (
    <Layout title="Healing">
      <Heading as="h3" fontSize={20} mb={4}>
        Healing Items
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="azufre"
            title="Azufre"
            thumbnail={azufreThumbnail}
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Layout>
  )
}

export default Category
