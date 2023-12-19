import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

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
  color: #fff;
  font-size: 65px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`
export const HomeAbout__text = styled.p`
  color: #fff;
  // font-family: 'Waiting for the Sunrise', cursive;
  // font-weight: bold;
  font-size: 25px;
  color: ${variaveis.verde};
  margin-bottom: 10px;
`
export const HomeAbout__icons = styled.ul`
  display: flex;
  padding: 0;
  align-items: flex-start;
  margin-bottom: 50px;

  li {
    margin-right: 10px;
  }

  img {
    display: block;
    max-width: 100%;
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
