import Linkedin from '../../assets/icons/Linkedin.svg'
import Github from '../../assets/icons/Github.svg'
import Behance from '../../assets/icons/Behance.svg'
import Gmail from '../../assets/icons/Gmail.svg'
import Arte from '../../assets/mainarte.svg'
import * as S from './styles'

const About = () => {
  return (
    <>
      <S.HomeAbout>
        <div>
          <S.HomeAbout__title>Carolina Mattos</S.HomeAbout__title>
          <S.HomeAbout__text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            tenetur? Voluptatem, doloribus, accusamus doloremque exercitationem
            unde totam, incidunt similique vitae suscipit quisquam rem? Adipisci
            ipsam facere aliquid unde, perspiciatis a!
          </S.HomeAbout__text>
          <S.HomeAbout__icons>
            <li>
              <a href="#">
                <img src={Linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Github} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Behance} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="mailto:mattos.carolina98@gmail.com">
                <img src={Gmail} alt="linkedin" />
              </a>
            </li>
          </S.HomeAbout__icons>
        </div>
        <S.HomeAbout_Element>
          <img src={Arte} alt="Icone Artistico" />
        </S.HomeAbout_Element>
      </S.HomeAbout>
    </>
  )
}

export default About
