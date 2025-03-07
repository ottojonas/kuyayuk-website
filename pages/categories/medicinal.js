import { Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkGridItem } from '../../components/grid-items'
import leavesThumbnail from '../../public/images/herb/herbs-translation.jpg'
import Section from '../../components/section'

const Category = () => {
  return (
    <Layout title="Medicinal">
      <Heading as="h3" fontSize={20} mb={4}>
        Medicinal Items
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <WorkGridItem
          id="herbs"
          title="Herbs"
          thumbnail={leavesThumbnail}
        ></WorkGridItem>
      </SimpleGrid>
    </Layout>
  )
}

export default Category
