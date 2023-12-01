import * as S from './styles'

const Header = () => {
  return (
    <S.Container_Header>
      <S.LinkAboutMe href="#">+ About me</S.LinkAboutMe>
      <S.WorksLinks>
        <S.TitleWorks>Works</S.TitleWorks>
        <S.Link_Page_Portfolio href="#">1</S.Link_Page_Portfolio>
        <S.Link_Page_Portfolio href="#">2</S.Link_Page_Portfolio>
        <S.Link_Page_Portfolio href="#">3</S.Link_Page_Portfolio>
        <S.Link_Page_Portfolio href="#">4</S.Link_Page_Portfolio>
      </S.WorksLinks>
    </S.Container_Header>
  )
}

export default Header
