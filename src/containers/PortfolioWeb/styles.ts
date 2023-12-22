import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import variaveis from '../../styles/variaveis'
import Vector from '../../assets/background/VectorCabecalho.svg'

export const PortfolioWeb__Container = styled.main`
  background-image: url(${Vector});
  background-color: ${variaveis.verdeClaro};
  width: 100vw;
  background-size: contain;
  background-repeat: no-repeat;
`
export const PortfolioWeb__Titulo = styled.h2`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px 70px 50px;
  color: ${variaveis.preto};
  text-align: center;
  font-size: 30px;

  p {
    font-family: Waiting for the Sunrise;
    font-size: 20px;
    margin-top: 10px;
    // font-weight: bold;
  }
`
export const GridSection = css`
  background-color: ${variaveis.verde};
  filter: drop-shadow(2px 4px 5.8px rgba(0, 0, 0, 0.3));
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-tempate-rows: repeat(2, auto);
    margin: 0 auto;
    border: none;
  }
`
export const Portfolio__SectionEsq_Mobile = styled.div`
  @media (max-width: 768px) {
    grid-row: 1;
  }
`
export const PortfolioWeb__SectionDir = styled(animated.section)`
  ${GridSection}
  transform: translate(0, 0);
`
export const PortfolioWeb__SectionEsq = styled(animated.section)`
  ${GridSection}
  grid-template-columns: 60% 40%;
  transform: translate(0, 0);
`
