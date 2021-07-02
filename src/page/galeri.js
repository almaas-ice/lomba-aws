import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column,
} from 'carbon-components-react'
import {HeaderSecondary} from '../components/header'

function Galeri() {
  return(
    <>
    <HeaderSecondary title="Galeri" />
    <Section>
      <Grid>
        <Row>
          <Column sm={4} md={4} lg={4}>
          img
          </Column>
        </Row>
      </Grid>
    </Section>
    </>
  )
}

export default Galeri;