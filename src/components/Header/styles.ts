import { animated } from 'react-spring'
import styled from 'styled-components'
import * as K from '../../styles/keyframes'
import { colors } from '../../styles/styles'
type WorksLinksProps = {
  open: boolean
}
export const Header = styled(animated.header)`
  display: flex;
  gap: 60px;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 20px 130px;
  z-index: 2;
  width: 100%;
  background: linear-gradient(
    180deg,
    ${colors.black} 100%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 768px) {
    background-color: ${colors.black};
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
  }
`
export const Link_Page_Portfolio = styled.a`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`
export const WorksLinks = styled.div<WorksLinksProps>`
  display: flex;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 100%;
    text-align: center;
  }
`
export const Header_Title = styled(animated.h1)`
  font-size: 25px;
  font-weight: bold;
  margin-right: 16px;
  color: ${colors.white};
  text-decoration: none;
  cursor: pointer;
  animation: ${K.fadeIn} 2s ease-in-out;
  &:hover {
    color: ${colors.green};
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0;
  }
`

export const MenuIcon = styled.div`
  cursor: pointer;
  display: none;
  color: ${colors.white};
  font-size: 25px;
  @media (max-width: 768px) {
    display: block;
  }
`
