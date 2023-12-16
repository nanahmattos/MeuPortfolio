import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import GithubIcon from '../../assets/icons/Github.svg'

type ProjetoImageProps = {
  imagemSrc: string
  linkVercel: string
  linkGit: string
}
const Projeto = ({ imagemSrc, linkVercel, linkGit }: ProjetoImageProps) => {
  const [hover, setHover] = useState(false)

  return (
    <>
      <S.Projeto__item
        className={`Projeto__item ${hover ? 'hover' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <S.Projeto__Image src={imagemSrc} alt="Imagem projeto Barbie-verso" />
        <S.ProjetoConteudo>
          <S.Projeto__frase>
            Clique no botão para abrir em uma nova aba
          </S.Projeto__frase>
          <Link to={linkVercel} target="_blank" rel="noopener noreferrer">
            <S.BotaoProjeto>Ver Projeto</S.BotaoProjeto>
          </Link>
          <Link to={linkGit} target="_blank" rel="noopener noreferrer">
            <S.BotaoCodigo>
              <img src={GithubIcon} alt="icone do github" />
              Ver &lt;/&gt;
            </S.BotaoCodigo>
          </Link>
        </S.ProjetoConteudo>
      </S.Projeto__item>
    </>
  )
}

export default Projeto
