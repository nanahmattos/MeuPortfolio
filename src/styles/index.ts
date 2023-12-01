import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
    list-style: none;
    overflow-x: hidden;

}

footer {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh;
  color: #fff;
}
`
export default EstiloGlobal
