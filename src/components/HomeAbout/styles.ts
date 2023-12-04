import styled from 'styled-components'

export const HomeAbout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const HomeAbout__title = styled.h1`
  color: #fff;
  font-size: 65px;
  margin-bottom: 14px;
`
export const HomeAbout__text = styled.p`
  color: #fff;
  font-family: 'Waiting for the Sunrise', cursive;
  font-size: 20px;
  margin-bottom: 14px;
`
export const HomeAbout__icons = styled.ul`
  display: inline-flex;
  margin-bottom: 50px;
  li {
    margin-right: 10px;
  }
  a {
    align-items: center;
  }
  img {
    widht: 100%;
    width: 26px;
    height: 27px;
  }
`
export const HomeAbout_Element = styled.div`
  text-align: right;
`
