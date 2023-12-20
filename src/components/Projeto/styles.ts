import styled from 'styled-components'
import { SocialButton } from '../../styles/mixins'

export const Projeto__item = styled.div`
  position: relative;
  overflow: hidden;
  transition: 0.3s;
`
export const Projeto__Image = styled.img`
  display: block;
  width: 100%;
  heigth: 375px;
  object-fit: cover;
  transition: filter 0.5s ease-in-out;
  ${Projeto__item}:hover & {
    filter: brightness(10%);
  }
`
export const ProjetoConteudo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.3s;
  ${Projeto__item}:hover & {
    opacity: 1;
  }
`
export const Projeto__frase = styled.p`
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
`
export const BotaoProjeto = styled.button`
  ${SocialButton}
  background-color: #fff;
  color: #000;
  margin-bottom: 10px;
`
export const BotaoCodigo = styled.button`
  ${SocialButton}
  background-color: #353434;
  gap: 10px;
`
