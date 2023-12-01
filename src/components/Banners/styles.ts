import styled from 'styled-components'
import { LegendsText, NumberElement } from '../../styles/mixins'
import imageBanners from '../../assets/banners/banners_image.png'

export const ContainerBannerMovie = styled.div`
  background-image: url(${imageBanners});
  width: 100vw;
  background-size: cover;
  height: 100%;
`
export const ContainerBanners = styled.section`
  display: flex;
  justify-content: end;
  padding: 20vh 10vh;
`
export const ContainerMovieMotion = styled.section`
  display: flex;
  margin-top: 1150px;
  margin-bottom: 150px;
  padding: 10vh;
`
export const Title = styled.h2`
  color: #000;
  font-size: 30px;
  font-weight: bold;
`
export const Banners__numberWork = styled.span`
  ${NumberElement}
  margin-right: 355px;
`
export const MovieMotion__numberWork = styled.span`
  ${NumberElement}
`
export const Banners__item = styled.div`
  ${LegendsText}
`
export const MovieMotion__item = styled.section`
  ${LegendsText}
  margin: 48px 120px;
`
