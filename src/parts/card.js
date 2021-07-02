import styled from 'styled-components'
import {Link} from 'react-router-dom'

const wrapperStyle = `
  width: 100%;
  height: 180px;
`
const ImgWrapper = styled.div`
  ${wrapperStyle}
  position: relative;
`
const Illustration = styled.img`
  width: 100%;
  height: 100%;
`
const Img = styled(Illustration)`
  width: 15%;
  position: absolute;
  top: 0;
  left: 0;
`
const DescWrapper = styled.div`
  ${wrapperStyle}
  padding: 24px;
  margin-bottom: 36px;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Desc = styled.div`
  width: 100%;
`
const TextLink = styled.p`
  color: #c69401;
  text-decoration: none;
`

export function CardImg(props) {
  return (
  <ImgWrapper>
    <Illustration src={props.Illustration} alt={props.alt}/>
    <Img src={props.image} alt={props.alt} />
  </ImgWrapper>
  )
}

export function CardDesc(props) {
  return(
    <DescWrapper>

      <Desc>
      <h4 style={{marginBottom:8}}>{props.title}</h4>
      <p>{props.desc}</p>
      </Desc>

      <Link to={`our-events/${props.slug}`}>
        <TextLink>
        Baca Selengkapnya
        </TextLink>
      </Link>

    </DescWrapper>
  )
}