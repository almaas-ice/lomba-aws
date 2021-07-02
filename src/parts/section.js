import styled from 'styled-components'

export const Section = styled.section`
  padding: 200px 0;
  ${({py})=> `padding: ${py}px 0;`}
  ${({top})=> `padding-top: ${top}px;`}
  ${({bottom})=> `padding-bottom: ${bottom}px;`}
`