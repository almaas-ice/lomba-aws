import {dataEvents} from '../adapter/data-events'
import {Section} from '../parts/section'
import {CardImg,CardDesc} from '../parts/card'
import {
  Grid,
  Row,
  Column,
} from 'carbon-components-react'

export function OurEvents() {
  return (
    <Section top={0}>
    <Grid>
      <Row>
        <Column sm={4} md={8} lg={3}>
          <h3 style={{marginBottom:36}}>Our Events</h3>
        </Column>
      </Row>

      {dataEvents.map(event=>(
        <Row>
          <Column sm={4} md={4} lg={{span:4,offset:3}}>
            <CardImg
              image={event.image}
              illustration={event.illustration}
            />
          </Column>
          <Column sm={4} md={4} lg={5}>
            <CardDesc 
              title={event.title}
              desc={event.desc}
              slug={event.slug}
            />
          </Column>
        </Row>
      ))}

    </Grid>
    </Section>
  )
}