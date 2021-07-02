import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column,
} from 'carbon-components-react'
import {HeaderSecondary} from '../components/header'
import {Pagination} from '../parts/pagination'


function VisiMisi() {
  const data = {
    visi: 'Terwujudnya pelajar muslim yang berilmu, berakhlak mulia, dan terampil dalam rangka menegakkan dan menjunjung tinggi nilai-nilai islam sehinggaterwujud masyarakat islam yang sebenar-benarnya',
    misi: [
      'Memperjuangkan nilai-nilai Islam sebagai Rahmatan Lil Alamin',
      'Meningkatkan kapasitas kepemimpinan pelajar muslim melalui kaderisasi, pendampingan, dan advoaksi',
      'Meningkatkan kesadaran pelajar tentang ilmu pengetahuan, keterampilan, dan teknologi',
      'Mengembangkan potensi pelajar muslim guna membentuk masyarakat muslim yang sebenar-benarnya'
    ]
  }

  return(
    <>
    <HeaderSecondary title="Visi Misi" />
    <Section>
      <Grid>
        <Row>
          <Column sm={4} md={3} lg={}>
            <h2>Visi</h2>
          </Column>
          <Column sm={4} md={5} lg={}>
            <p>
            {data.visi}
            </p>
          </Column>
        </Row>

        <Row>
          <Column sm={4} md={3} lg={}>
          <h2>Misi</h2>
          </Column>
          <Column sm={4} md={3} lg={}>
            <ol>
            {data.misi.map((value,i)=>(
            <li key={i}>{value}</li>
            ))}
            </ol>
          </Column>
        </Row>
      </Grid>
    </Section>
    <Pagination prev={2} next={3}/>
    </>
  )
}

export default VisiMisi;