import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  background-color: ${variaveis.preto};
  padding: 110px 110px 20px 110px;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin-top: 50px;
    padding: 90px 0 0 0;
  }
`
