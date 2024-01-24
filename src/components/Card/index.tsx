import { useState } from 'react'

import Button from '../Button'
import gitHubIcon from '../../assets/icons/Github.svg'

import * as S from './styles'

const Card = ({
  title,
  subTitle,
  text,
  image,
  linkGit,
  linkVercel,
  number,
  id
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <S.Container className="container">
      <S.LegendItem>
        <S.Number>{number}</S.Number>
        <div>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          <p>{text}</p>
        </div>
      </S.LegendItem>
      <S.ImageItem
        isVisible={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt="Imagem do projeto" />
        <div>
          <p>
            Clique no botão para <br />
            abrir o projeto em uma nova aba
          </p>
          <Button to={linkGit} type="code">
            <>
              <img src={gitHubIcon} alt="GitHub Icone" />
              Ver &lt;/&gt;
            </>
          </Button>
          <Button to={linkVercel} type="site">
            <>Ver projeto</>
          </Button>
        </div>
      </S.ImageItem>
    </S.Container>
  )
}

export default Card
