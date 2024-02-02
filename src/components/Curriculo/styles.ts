import styled, { css } from 'styled-components'
import * as K from '../../styles/keyframes'
import { colors } from '../../styles/styles'

export const Introducao = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 50px;
    text-align: center;
  }
  h4 {
    font-size: 25px;
    // font-family: 'Waiting for the Sunrise', cursive;
    margin-top: 106px;
    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
  p {
    // font-family: 'Waiting for the Sunrise', cursive;
    font-size: 20px;
  }
`
export const ImageProfile = styled.div`
  img {
    width: auto;
    height: 320px;
    object-fit: none;
    margin-top: 30px;
  }
`
export const CorDestaque = styled.b`
  color: ${colors.green};
`
export const Curriculo__text = styled.p`
  font-size: 18px;
`
//--------------TIME LINE
export const TimeLine = styled.section`
  background-color: ${colors.green};
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-template-rows: auto auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Title = css`
  font-size: 30px;
  font-weight: bold;
  padding: 0 130px;
  margin-top: 29px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`
export const Educacao__title = styled.h3`
  ${Title}
  grid-row: 1;
  grid-column: 1;
`
export const Experiencia__title = styled.h3`
  ${Title}
  grid-row: 1;
  grid-column: 2;

  @media (max-width: 768px) {
    grid-row: 3;
    grid-column: 1;
  }
`
const TimeLine__Content = css`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0 50px;
    align-items: center;
    justify-content: start;
  }

  img {
    width: 7px;
    height: 243px;
  }

  ul {
    h5 {
      color: ${colors.black};
      font-weight: normal;
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }

    li {
      margin-bottom: 7px;
      margin-left: 7px;

      @media (max-width: 768px) {
        margin-left: 0px;
      }
    }
  }
`
export const Educacao = styled.div`
  ${TimeLine__Content}
  grid-row: 2;
  grid-column: 1;
`
export const Experiencia = styled.div`
  ${TimeLine__Content}
  grid-row: 2;
  grid-column: 2;

  @media (max-width: 768px) {
    grid-row: 4;
    grid-column: 1;
  }
`
export const TimeLine__element = styled.div`
  display: flex;
  align-items: center;
  grid-row: span 2;
  grid-column: 3;
  margin-left: 115px;

  @media (max-width: 768px) {
    display: none;
  }
`
//-----------------skills
export const Skills = styled.section`
  @media (max-width: 768px) {
    padding: 0 50px;
    align-items: center;
  }
`
export const Skills__title = styled.h3`
  font-size: 50px;
  margin: 42px 0;
  background: linear-gradient(
    180deg,
    ${colors.green} 30%,
    rgba(0, 0, 0, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const Skills__item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    h4 {
      text-align: center;
    }
  }
  h4 {
    font-family: 'Waiting for the Sunrise', cursive;
    font-size: 25px;
    margin-bottom: 10px;
  }
`
export const Skills__lista = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 80px;
  margin-bottom: 15px;
  align-items: center;
  svg {
    animation: ${K.fadeIn} 2s ease-in-out;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`
