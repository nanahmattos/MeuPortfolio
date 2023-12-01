import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import Vector from '../../assets/background/VectorCabecalho.svg'

export const ContainerMain = styled.main`
  // display: none;
  background-color: ${variaveis.verde};
  background-image: url(${Vector});
  position: relative;
  width: 100vw;
  background-size: contain;
  background-repeat: no-repeat;
`
