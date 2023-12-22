import { css } from 'styled-components'
import variaveis from './variaveis'

export const SocialButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 0;
  width: 137px;
  height: 46px;
  border-radius: 20px;
  border: none;
  background: ${variaveis.preto};
  font-weight: bold;
  font-size: 20px;
  overflow: hidden;
  color: ${variaveis.branco};
  cursor: pointer;

  a {
    text-decoration: none;
    line-height: normal;
    color: ${variaveis.branco};
  }
  img {
    max-width: 28px;
  }
`
