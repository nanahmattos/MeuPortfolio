import { useState, useEffect } from 'react'
import * as S from '../styles'
import variaveis from '../../../styles/variaveis'

const Works = () => {
  const [estaSelecionado, setEstaSelecionado] = useState<number | null>(null)

  const handleClickBotao = (index: number) => {
    setEstaSelecionado(index)
    rolarParaSecao(index)
  }
  const botaoEstilo = (index: number) => ({
    backgroundColor: index === estaSelecionado ? variaveis.verde : 'white',
    color: 'black'
  })

  const links = ['#Work_1', '#Work_2', '#Work_3', '#Work_4']

  const rolarParaSecao = (index: number) => {
    if (index >= 0 && index < links.length) {
      const secao = document.querySelector(links[index])
      if (secao) {
        secao.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    rolarParaSecao(-1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <S.Header_Title
        style={{ color: variaveis.verde }}
        onClick={() => handleClickBotao(-1)}
      >
        Projetos
      </S.Header_Title>
      {[0, 1, 2, 3].map((index) => (
        <S.Link_Page_Portfolio
          key={index}
          style={botaoEstilo(index)}
          onClick={() => handleClickBotao(index)}
        >
          {index + 1}
        </S.Link_Page_Portfolio>
      ))}
    </>
  )
}
export default Works
