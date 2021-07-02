import styled from 'styled-components'
import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column
} from 'carbon-components-react'

const Iframe = styled.iframe`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  margin: 0;
  padding: 0;
`
function Magazine() {
  return(
    <Section>
      <Grid>
        <Row>
          <Column>
          <h3>Majalah Sun31</h3>
          </Column>
        </Row>
      </Grid>
      
      <Iframe src='https://online.pubhtml5.com/wirxv/rlec/' title='majalah sun31'/>
    </Section>
  )
}
export default Magazine;