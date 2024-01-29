import ImageProfile from '../../assets/aboutme/nanahmattos.png'
import Timeline from '../../assets/aboutme/timeline.svg'
import Element from '../../assets/elements/element_2.png'

import * as S from './styles'

const Curriculo = () => {
  return (
    <>
      <S.Introducao className="container" id="curriculo">
        <S.ImageProfile>
          <img src={ImageProfile} alt="Imagem Perfil Carolina Mattos" />
        </S.ImageProfile>
        <div>
          <h4>Olá ! sou Carolina,</h4>
          <p>
            profissional apaixonada por design e criatividade. Minha jornada
            começou em Design de Moda, e ao longo do tempo, explorei áreas como
            Social Media e Direção de Arte. Hoje, me realizo como{' '}
            <S.CorDestaque>Desenvolvedora Front-end</S.CorDestaque>.
          </p>
        </div>
      </S.Introducao>
      <S.TimeLine>
        <S.Educacao__title>
          <h3>Educação</h3>
        </S.Educacao__title>
        <S.Educacao>
          <img src={Timeline} alt="linha do tempo" />
          <ul>
            <li>
              <h5>Análise e Desenv. de Sistemas</h5>
              <p>Técnico, Estácio</p>
              <p>2023 - cursando</p>
            </li>
            <li>
              <h5>Engenheiro Front-end</h5>
              <p>Formação, EBAC</p>
              <p>2023</p>
            </li>
            <li>
              <h5>UX/UI Design</h5>
              <p>Formação, EBAC</p>
              <p>2023 - cursando</p>
            </li>
            <li>
              <h5>Design de Moda</h5>
              <p>Bacharel, Fiam Faam</p>
              <p>2016 - 2022</p>
            </li>
          </ul>
        </S.Educacao>
        <S.Experiencia__title>
          <h3>Experiência</h3>
        </S.Experiencia__title>
        <S.Experiencia>
          <img src={Timeline} alt="linha do tempo" />
          <ul>
            <li>
              <h5>Direção de Arte</h5>
              <p>TK7 Marketing</p>
              <p>2022 - 2023</p>
            </li>
            <li>
              <h5>Auxiliar Administrativo</h5>
              <p>C.A.M (Centro Automotivo)</p>
              <p>2020 - 2022</p>
            </li>
            <li></li>
            <li>
              <h5>Social Media</h5>
              <p>CYD Side</p>
              <p>2019 - 2020</p>
            </li>
            <li>
              <h5>Visual Mershandising</h5>
              <p>Groovy Forever</p>
              <p>2017</p>
            </li>
          </ul>
        </S.Experiencia>
        <S.TimeLine__element>
          <img src={Element} alt="Elemento 1/2 circulo" />
        </S.TimeLine__element>
      </S.TimeLine>
      <S.Skills className="container">
        <S.Skills__title>Skills</S.Skills__title>
        <S.Skills__item>
          <ul>
            <h4>Program Tools</h4>
            <S.Skills__lista>
              <S.Curriculo__text>HTML</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#48D97A" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>CSS</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#48D97A" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>JavaScript</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#fff" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>React</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#48D97A" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>Git</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#fff" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>Node.js</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#fff" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>BootStrap</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#48D97A" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>SASS</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#fff" />
              </svg>
            </S.Skills__lista>
          </ul>
          <ul>
            <h4>Design Tools</h4>
            <S.Skills__lista>
              <S.Curriculo__text>Photoshop</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#48D97A" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>Illustrator</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#48D97A" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>After Effects</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#fff" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>Figma</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#48D97A" />
              </svg>
            </S.Skills__lista>
          </ul>
          <ul>
            <h4>Estou estudando</h4>
            <S.Skills__lista>
              <S.Curriculo__text>Redux</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="##48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="##48D97A" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#fff" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>Phyton</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#fff" />
              </svg>
            </S.Skills__lista>
            <S.Skills__lista>
              <S.Curriculo__text>Angular</S.Curriculo__text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="9"
                viewBox="0 0 117 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="16.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="28.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="40.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="52.5" cy="4.5" r="4.5" fill="#48D97A" />
                <circle cx="64.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="76.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="88.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="100.5" cy="4.5" r="4.5" fill="#fff" />
                <circle cx="112.5" cy="4.5" r="4.5" fill="#fff" />
              </svg>
            </S.Skills__lista>
          </ul>
        </S.Skills__item>
      </S.Skills>
    </>
  )
}

export default Curriculo
