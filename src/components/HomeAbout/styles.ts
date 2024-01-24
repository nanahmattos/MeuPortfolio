import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const HomeAbout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const HomeAbout__title = styled.h1`
  color: ${colors.white};
  font-size: 65px;
  @media (max-width: 768px) {
    font-size: 35px;
    margin-top: 25px;
  }
`
export const HomeAbout__text = styled.p`
  color: ${colors.white};
  font-size: 25px;
  color: ${colors.green};
  margin-bottom: 10px;
`
export const HomeAbout__icons = styled.ul`
  display: flex;
  padding: 0;
  align-items: flex-start;
  margin-bottom: 50px;
  width: 100%;
  li {
    margin-right: 10px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`
export const HomeAbout_Element = styled.div`
  text-align: right;
  img {
    height: 300px;
  }
`
