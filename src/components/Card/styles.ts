import styled, { css } from 'styled-components'
import { colors } from '../../styles/styles'

type Props = {
  isVisible: boolean
}

export const Container = styled.div`
  background-color: ${colors.green};
  filter: drop-shadow(2px 4px 5.8px rgba(0, 0, 0, 0.3));
  display: grid;
  grid-template-columns: 40% 60%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const LegendItem = styled.div`
  position: relative;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div {
    position: absolute;
    top: 18px;
    left: 18%;
    padding: 25px;
    @media (max-width: 768px) {
      position: relative;
      padding: 0 32px 32px;
      left: 0;
      text-align: center;
    }
    h2 {
      font-size: 30px;
      font-weight: bold;
    }
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: normal;
    }
    p {
      font-size: 20px;
    }
  }
`

export const Number = styled.span`
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background-color: ${colors.white};
  color: ${colors.green};
  font-size: 80px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
`
export const ImageItem = styled.div<Props>`
  position: relative;
  &:hover {
    > img {
      filter: brightness(10%);
    }
    div {
      display: flex;
    }
  }
  img {
    display: block;
    width: 100%;
    heigth: 375px;
    object-fit: cover;
    transition: filter 0.5s ease-in-out;
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    transition: 0.7s ease-in-out;
    p {
      color: white;
      margin-bottom: 10px;
      text-align: center;
    }
  }
`
