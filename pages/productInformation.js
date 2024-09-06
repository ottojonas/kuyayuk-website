import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section.js'
import { WorkGridItem } from '../components/grid-items.js'
import Layout from '../components/layouts/article.js'
import ashwagandaThumbnail from '../public/images/ashwaganda/ashwagandaImage.jpg'
import azufreThumbnail from '../public/images/azufre/azufreImage02.jpg'
import maskThumbnail from '../public/images/masks/devilMask.jpg'
import paloSantosThumbnail from '../public/images/paloSantos/paloSantosBuring02.jpg'
import P from '../components/paragraph.js'

const Information = () => {
  return (
    <Layout title="Information">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Product Information
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="ashwaganda"
              title="Ashwaganda"
              thumbnail={ashwagandaThumbnail}
            >
              <P>Ashwaganda ...</P>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="azufre"
              title="Azufre"
              thumbnail={azufreThumbnail}
            >
              <P>Azufre ...</P>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="mask" title="Masks" thumbnail={maskThumbnail}>
              <P>Masks ...</P>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="paloSantos"
              title="Palo Santos"
              thumbnail={paloSantosThumbnail}
            >
              <P>Palo Santos ...</P>
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Information
