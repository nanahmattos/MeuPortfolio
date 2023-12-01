import styled from 'styled-components'
import { LegendsText, NumberElement, PaletaDeCor } from '../../styles/mixins'

export const SocialMedia__content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10vw 10vw 0 10vw;
`

export const SocialMedia__numberWork = styled.span`
  ${NumberElement}
  margin-right: 5px;
`
export const SocialMedia__item = styled.div`
  ${LegendsText}
`
export const SocialMedia__image = styled.div`
  width: 100vh;
  ul {
    display: flex;
    justify-content: end;
    gap: 10px;
    margin-right: 156px;
  }
`
//---Paleta de cor --
export const PaletaDeCor16ffaa4 = styled.div`
  ${PaletaDeCor}
  background-color: #16ffa4;
`
//-----

export const SocialMedia__Feedimage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`
export const FeedImage = styled.div`
  text-align: center;
  align-self: flex-end;
`
