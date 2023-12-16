import { css } from 'styled-components'

export const SocialButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 0;
  width: 137px;
  height: 46px;
  border-radius: 20px;
  border: none;
  background: #000;
  font-weight: bold;
  font-size: 20px;
  overflow: hidden;
  color: #fff;
  cursor: pointer;

  a {
    text-decoration: none;
    line-height: normal;
    color: #fff;
  }
  img {
    max-width: 28px;
  }
`
