import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column,
} from 'carbon-components-react'
import {HeaderSecondary} from '../components/header'
import {Pagination} from '../parts/pagination'
import {dataGaleri} from '../adapter/data-galeri'

function Galeri() {
  return(
    <>
    <HeaderSecondary title="Galeri" />
    <Section>
      <Grid>
        <Row>
          <Column sm={4} md={4} lg={4}>
          {dataGaleri.map((image,i)=>(
            <div>
              <img 
              src={image} 
              alt={`gambar ${i}`} 
              key={i}
              />
            </div>
          ))}
          </Column>
        </Row>
      </Grid>
    </Section>
    <Pagination prev={1} next={2}/>
    </>
  )
}

export default Galeri;