import { createGlobalStyle } from 'styled-components'
import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const colors = {
  green: '#48D97A',
  greenlight: '#7BFAA7',
  black: '#000',
  white: '#fff'
}

const EstiloGlobal = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
    list-style: none;
    text-decoration: none;
}
.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
export default EstiloGlobal
