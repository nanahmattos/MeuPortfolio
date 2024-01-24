import linkedin from '../../assets/icons/Linkedin.svg'
import github from '../../assets/icons/Github.svg'
import behance from '../../assets/icons/Behance.svg'
import instagram from '../../assets/icons/Instagram.svg'
import GifHome from '../../assets/gif_home.gif'

import * as S from './styles'
const About = () => {
  return (
    <>
      <S.HomeAbout className="container">
        <div>
          <S.HomeAbout__title>Carolina Mattos</S.HomeAbout__title>
          <S.HomeAbout__text>
            Desenvolvedora Front-end • Designer •
          </S.HomeAbout__text>
          <S.HomeAbout__icons>
            <li>
              <a
                href="https://www.linkedin.com/in/carolinamattos98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="icone do Linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nanahmattos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="icone do Github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nanahmattos_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="icone do Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/nanahmattos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={behance} alt="icone do Behance" />
              </a>
            </li>
          </S.HomeAbout__icons>
        </div>
        <S.HomeAbout_Element>
          <img src={GifHome} alt="Icone Artistico" />
        </S.HomeAbout_Element>
      </S.HomeAbout>
    </>
  )
}

export default About
