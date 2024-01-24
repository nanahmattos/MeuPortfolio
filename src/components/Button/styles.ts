import styled from 'styled-components'
import { ButtonProps } from '.'
import { Link } from 'react-router-dom'

export const Button = styled(Link)<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 0;
  width: 137px;
  height: 46px;
  border-radius: 20px;
  border: none;
  background: ${(props) => (props.type === 'site' ? 'white' : 'gray')};
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => (props.type === 'site' ? 'black' : 'white')};
  cursor: pointer;
  gap: 8px;
  margin-bottom: 5px;
  img {
    max-width: 28px;
  }
`
