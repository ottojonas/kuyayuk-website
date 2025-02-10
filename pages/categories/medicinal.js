import { Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkGridItem } from '../../components/grid-items'
import leavesThumbnail from '../../public/images/herbal/herbal1.jpg'
import Section from '../../components/section'

const Category = () => {
  return (
    <Layout title="Medicinal">
      <Heading as="h3" fontSize={20} mb={4}>
        Medicinal Items
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <WorkGridItem
          id="leaves"
          title="Leaves"
          thumbnail={leavesThumbnail}
        ></WorkGridItem>
      </SimpleGrid>
    </Layout>
  )
}

export default Category
