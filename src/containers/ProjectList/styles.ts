import styled from 'styled-components'
import vector from '../../assets/background/VectorCabecalho.svg'
import { colors } from '../../styles/styles'

export const Container = styled.div`
  background-image: url(${vector});
  background-color: ${colors.greenlight};
  width: 100vw;
  background-size: contain;
  background-repeat: no-repeat;
  > h2 {
    padding: 120px 0 40px;
    font-size: 42px;
    text-align: center;
  }
  .swiper {
    max-width: 1124px;
    width: 100%;
  }
  .swiper-pagination-bullet {
    background-color: black;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: black;
  }
  .paddingBottom {
    padding-bottom: 50px;
  }
`
