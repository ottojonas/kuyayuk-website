import { Title, ProductImage, Meta } from '../../components/product'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import {
  Badge,
  Button,
  Container,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const Product = () => (
  <Layout title="Palo Santos">
    <Container>
      <Title>
        Palo Santos<Badge>Spiritual</Badge>
      </Title>
      <ProductImage
        src="/images/paloSantos/paloSantosInABox.jpg"
        alt="paloSantosInABox"
      />
      <P>
        Palo Santo ("Holy Wood") is a fragrant wood from the Bursera graveolens
        tree, native to South America. Traditionally used in spiritual rituals
        and energy cleansing, it has a sweet, woody aroma with hints of citrus
        and mint. It's often burned for its calming properties, promoting
        relaxation, clarity, and positive energy. Sustainable sourcing is
        essential, as the wood is most aromatic when naturally fallen and aged.
      </P>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="teal"
        >
          Contact Us
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="mailto:kuyayuk@outlook.com">
            Email
          </MenuItem>
          <MenuItem
            as="a"
            href="https://www.instagram.com/kuyay.uk"
            target="_blank"
          >
            Instagram
          </MenuItem>
        </MenuList>
      </Menu>
      <List>
        <ListItem>
          <Meta>Origin</Meta>
          <span>Peru</span>
        </ListItem>
        <ListItem>
          <Meta>How To Use</Meta>
          <span>
            <br />
            1. <strong>Burning as Incense</strong> Light one end of a Palo Santo
            stick until it catches fire. Let it burn for 30 seconds, then blow
            out the flame. Allow the smoke to waft through your space for
            cleansing.
            <br /> <strong>2. Meditation & Relaxation</strong> Hold the
            smoldering stick while meditating. Breathe in the scent for
            grounding and focus. <br />{' '}
            <strong> 4. Aromatherapy & Spiritual Use</strong> Place a piece of
            Palo Santo in a fire-safe dish to let it smolder. Use the smoke to
            cleanse crystals, objects, or your surroundings. <br />{' '}
            <strong> 5. Essential Oil Application </strong>Palo Santo essential
            oil can be diffused or diluted with a carrier oil for topical use.
            Helps relieve stress and enhance mental clarity.
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Product
