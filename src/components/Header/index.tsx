import { useState } from 'react'
import * as S from './styles'

const Header = () => {
  const [selecionado, setSelecionado] = useState(false)

  const handleClicaBotao = () => {
    setSelecionado(!selecionado)
  }
  return (
    <S.Header>
      <S.WorksLinks>
        <S.TitleWorks to="/">Works</S.TitleWorks>
        <S.Link_Page_Portfolio href="#Work_1">1</S.Link_Page_Portfolio>
        <S.Link_Page_Portfolio href="#Work_2">2</S.Link_Page_Portfolio>
        <S.Link_Page_Portfolio href="#Work_3">3</S.Link_Page_Portfolio>
        <S.Link_Page_Portfolio href="#Work_4">4</S.Link_Page_Portfolio>
      </S.WorksLinks>
      <S.LinkAboutMe
        to="/cv"
        style={{
          color: selecionado ? 'red' : 'blue'
        }}
        onClick={handleClicaBotao}
      >
        + About me
      </S.LinkAboutMe>
    </S.Header>
  )
}

export default Header
