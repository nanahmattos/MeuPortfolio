import styled, { css } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const NumberElement = css`
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background-color: #fff;
  color: ${variaveis.verde};
  font-size: 80px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Legends__item = styled.div`
  margin-left: 50px;

  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Legends__numberWork = styled.span`
  ${NumberElement}
  position: absolute;
  @media (max-width: 768px) {
    position: relative;
  }
`
export const Legends__text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  position: relative;
  margin-left: 90px;
  h2 {
    color: ${variaveis.preto};
    font-size: 30px;
    font-weight: bold;
  }

  h3 {
    color: ${variaveis.preto};
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  p {
    color: ${variaveis.preto};
    width: 300px;
    font-family: Waiting for the Sunrise;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`
