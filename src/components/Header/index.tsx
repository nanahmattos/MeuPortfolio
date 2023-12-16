import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const Header = () => {
  const navigate = useNavigate()
  const [exibeBotaoHeader, setExibeBotaoHeader] = useState(true)
  //--MOBILE
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!open)
  }
  //------
  useEffect(() => {
    const handleScroll = () => {
      const secaoHome = document.getElementById('home')
      setExibeBotaoHeader(!secaoHome || window.scrollY > secaoHome.offsetTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const rolarTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <S.Header className="header">
      {exibeBotaoHeader && (
        <S.Header_Title onClick={rolarTopo}>Carolin Mattos</S.Header_Title>
      )}
      <S.MenuIcon onClick={toggleMenu}>
        <svg width="35" height="10" fill="none">
          <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
          <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
          <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
        </svg>
      </S.MenuIcon>
      <S.WorksLinks open={open}>
        <S.Header_Title onClick={() => navigate('/')}>Projetos</S.Header_Title>
        <S.Header_Title onClick={() => navigate('/cv')}>
          +About Me
        </S.Header_Title>
      </S.WorksLinks>
    </S.Header>
  )
}

export default Header
