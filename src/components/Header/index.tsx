import { useSpring } from '@react-spring/core'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import variaveis from '../../styles/variaveis'
import * as S from './styles'

const Header = () => {
  const navigate = useNavigate()
  const [exibeBotaoHeader, setExibeBotaoHeader] = useSpring(() => ({
    opacity: 0
  }))
  //--MOBILE
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!open)
  }
  //------

  useEffect(() => {
    const handleScroll = () => {
      const secaoHome = document.getElementById('home')
      const shouldShowHeader =
        !secaoHome || window.scrollY > secaoHome.offsetTop
      setExibeBotaoHeader({ opacity: shouldShowHeader ? 1 : 0 })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setExibeBotaoHeader])
  //--
  const handleNavigatAndScroll = (route: string, elementId: string) => {
    navigate(route)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }
  //---Botao Home CAROLINA MATTOS
  const rolarTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  //----
  return (
    <S.Header className="header">
      <S.Header_Title style={exibeBotaoHeader} onClick={rolarTopo}>
        Carolin Mattos
      </S.Header_Title>
      <S.MenuIcon onClick={toggleMenu}>
        <svg width="35" height="10" fill="none">
          <circle cx="4.5" cy="4.5" r="4.5" fill={variaveis.verde} />
          <circle cx="16.5" cy="4.5" r="4.5" fill={variaveis.verde} />
          <circle cx="28.5" cy="4.5" r="4.5" fill={variaveis.verde} />
        </svg>
      </S.MenuIcon>
      <S.WorksLinks open={open}>
        <S.Header_Title
          onClick={() => handleNavigatAndScroll('/', 'portfolio')}
        >
          Projetos
        </S.Header_Title>
        <S.Header_Title
          onClick={() => handleNavigatAndScroll('/cv', 'curriculo')}
        >
          +Sobre
        </S.Header_Title>
      </S.WorksLinks>
    </S.Header>
  )
}

export default Header
