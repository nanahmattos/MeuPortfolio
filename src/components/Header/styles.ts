import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Header = styled.header`
  display: flex;
  justify-content: end;
  gap: 60px;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 20px 67px;
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  z-index: 1;
`
export const LinkAboutMe = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
`
export const Link_Page_Portfolio = styled.a`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WorksLinks = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TitleWorks = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  margin-right: 16px;
  color: #fff;
  text-decoration: none;
`
