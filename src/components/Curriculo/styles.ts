import styled, { css } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Introducao = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 86px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 50px;
  }

  img {
    width: 320px;
    height: 320px;
    margin-top: 30px;
  }

  h4 {
    font-size: 35px;
    font-family: 'Waiting for the Sunrise', cursive;
    margin-top: 106px;
    font-weight: normal;
    @media (max-width: 768px) {
      margin-top: 0;
    }
  }

  p {
    font-family: 'Waiting for the Sunrise', cursive;
    font-size: 20px;
  }
`
//--------------TIME LINE
export const TimeLine = styled.section`
  background-color: ${variaveis.verde};
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-template-rows: auto auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const Title = css`
  font-size: 30px;
  font-weight: bold;
  padding: 0 130px;
  margin-top: 29px;
  margin-bottom: 20px;
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
  }

  img {
    width: 7px;
    height: 243px;
  }

  ul {
    h5 {
      color: #000;
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
//-----------------
export const Skills = styled.section`
  padding: 0 143px;

  @media (max-width: 768px) {
    padding: 0 50px;
    align-items: center;
  }
`
export const Skills__title = styled.h3`
  font-size: 50px;
  margin-top: 42px;
`
export const Skills__item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  h4 {
    font-family: Waiting for the Sunrise;
    font-size: 25px;
    margin-bottom: 10px;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-right: 105px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`
export const Button = styled.section`
  display: flex;
  justify-content: center;
  padding: 94px 0;

  button {
    background-color: ${variaveis.verde};
    border-radius: 20px;
    border: none;
    cursor: pointer;
    width: 321px;
    height: 72px;
    font-size: 25px;
    font-weight: bold;
    color: #000;

    a {
      text-decoration: none;
    }
  }
`
