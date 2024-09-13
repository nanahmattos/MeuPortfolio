import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const Container = styled.div`
  background-color: ${colors.black};
  padding-top: 110px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin-top: 50px;
    padding: 90px 0 0 0;
  }
`
