import { css } from 'styled-components'
import variaveis from './variaveis'

export const NumberElement = css`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #fff;
  color: ${variaveis.verde};
  font-size: 130px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PaletaDeCor = css`
  display: block;

  div {
    width: 65px;
    height: 65px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 20px;
    background-color: #fff;
    color: #000;
    font-size: 15px;
  }
`
export const LegendsText = css`
  display: block;
  position: absolute;
  margin: 48px 111px;

  h2 {
    color: #000;
    font-size: 30px;
    font-weight: bold;
  }

  h3 {
    color: #000;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  p {
    color: #000;
    width: 300px;
    font-family: Waiting for the Sunrise;
    font-size: 20px;
  }
  img {
    margin-right: 7px;
  }
`
