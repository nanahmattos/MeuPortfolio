import Linkedin from '../../assets/icons/Linkedin.svg'
import Github from '../../assets/icons/Github.svg'
import Behance from '../../assets/icons/Behance.svg'
import * as S from './styles'
import GifHome from '../../assets/gif_home.gif'
const About = () => {
  return (
    <>
      <S.HomeAbout>
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
                <img src={Linkedin} alt="icone do linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nanahmattos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="icone do github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/nanahmattos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Behance} alt="icone do behance" />
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
