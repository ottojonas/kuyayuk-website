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
import { Title, ProductImage, Meta } from '../../components/product'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Product = () => {
  return (
    <Layout title="Azufre">
      <Container>
        <Title>
          Azufre <Badge>Healing</Badge>
        </Title>
        <ProductImage
          src="/images/azufre/azufreImage01.jpg"
          alt="azufreImage"
        />
        <P>
          A Barra de Azufre (Sulfur Bar) is a natural remedy traditionally used
          in Latin American folk medicine for pain relief, energy cleansing, and
          removing negative energies. Made from solid sulfur, it is believed to
          help with muscle tension, joint pain, and spiritual cleansing by
          absorbing negative energy from the body. It is often used in limpias
          (spiritual cleansings) to promote well-being.
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
              {' '}
              <strong>1. For Pain Relief & Energy Cleansing</strong>
              Roll the sulfur bar gently over the affected area (such as
              muscles, joints, or back). You may hear cracking sounds as the bar
              absorbs energy and breaks, which is considered normal. <br />
              <strong>2. Spiritual Cleansing (Limpia)</strong>
              Pass the bar over your body from head to toe, focusing on areas
              where you feel tension or discomfort. It is recommended to do this
              in a quiet space with intention and focus. Cracking & Disposal If
              the bar cracks or shatters, some traditions suggest that it has
              absorbed negativity and should be discarded. Dispose of the broken
              pieces in running water or bury them to release the absorbed
              energy.
              <br />
              <strong>3. Heat Therapy (Optional)</strong>
              Some practitioners warm the bar slightly before use for deeper
              relaxation and pain relief (avoid overheating as sulfur can
              release fumes).
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Product
