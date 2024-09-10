import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { WorkGridItemCategory } from '../components/grid-categories'
import spiritualCat from '../public/images/paloSantos/paloSantosInABox.jpg'
import healingCat from '../public/images/azufre/azufreImage02.jpg'
import clothingCat from '../public/images/masks/devilMask.jpg'
import Section from '../components/section'
const Categories = () => {
  return (
    <Layout title="Categories">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Categories
        </Heading>
        <Section>
          <WorkGridItemCategory
            id="spiritualCat"
            title="Spiritual"
            thumbnail={spiritualCat}
          ></WorkGridItemCategory>
        </Section>
        <Section>
          <WorkGridItemCategory
            id="healingCat"
            title="Healing"
            thumbnail={healingCat}
          ></WorkGridItemCategory>
        </Section>
        <Section>
          <WorkGridItemCategory
            id="clothingCat"
            title="Clothing"
            thumbnail={clothingCat}
          ></WorkGridItemCategory>
        </Section>
      </Container>
    </Layout>
  )
}

export default Categories
