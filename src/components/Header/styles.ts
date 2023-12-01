import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container_Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`
export const LinkAboutMe = styled.a`
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  color: ${variaveis.verde};
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
export const TitleWorks = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-right: 16px;
  color: #fff;
`
