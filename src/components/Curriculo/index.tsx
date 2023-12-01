import * as S from './styles'
import ImageProfile from '../../assets/aboutme/nanahmattos.png'
import Timeline from '../../assets/aboutme/timeline.svg'
import Element from '../../assets/elements/element_2.png'

const Curriculo = () => {
  return (
    <>
      <S.Introducao>
        <img src={ImageProfile} alt="Imagem Perfil Carolina Mattos" />
        <div>
          <h4>Iam just girl from</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            laudantium magnam deserunt odit quidem voluptatem natus deleniti
            quisquam, in, asperiores itaque facere expedita aperiam praesentium
            at et totam voluptatum quia.
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
              <h5>Análise e Desenv. de Sistemas</h5>
              <p>Técnico, Estácio</p>
              <p>2023 - cursando</p>
            </li>
            <li>
              <h5>Análise e Desenv. de Sistemas</h5>
              <p>Técnico, Estácio</p>
              <p>2023 - cursando</p>
            </li>
            <li>
              <h5>Análise e Desenv. de Sistemas</h5>
              <p>Técnico, Estácio</p>
              <p>2023 - cursando</p>
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
              <h5>Análise e Desenv. de Sistemas</h5>
              <p>Técnico, Estácio</p>
              <p>2023 - cursando</p>
            </li>
            <li>
              <h5>Análise e Desenv. de Sistemas</h5>
              <p>Técnico, Estácio</p>
              <p>2023 - cursando</p>
            </li>
            <li>
              <h5>Análise e Desenv. de Sistemas</h5>
              <p>Técnico, Estácio</p>
              <p>2023 - cursando</p>
            </li>
            <li>
              <h5>Análise e Desenv. de Sistemas</h5>
              <p>Técnico, Estácio</p>
              <p>2023 - cursando</p>
            </li>
          </ul>
        </S.Experiencia>
        <S.TimeLine__element>
          <img src={Element} alt="Elemento 1/2 circulo" />
        </S.TimeLine__element>
      </S.TimeLine>
      <S.Skills>
        <S.Skills__title>Skills</S.Skills__title>
        <S.Skills__item>
          <ul>
            <h4>Program Tools</h4>
            <li>
              <p>HTML</p>
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
            </li>
            <li>
              <p>CSS</p>
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
            </li>
            <li>
              <p>Java Script</p>
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
            </li>
            <li>
              <p>React</p>
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
            </li>
            <li>
              <p>Git</p>
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
            </li>
            <li>
              <p>Node.js</p>
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
            </li>
          </ul>
          <ul>
            <h4>Program Tools</h4>
            <li>
              <p>HTML</p>
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
            </li>
            <li>
              <p>CSS</p>
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
            </li>
            <li>
              <p>Java Script</p>
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
            </li>
            <li>
              <p>React</p>
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
            </li>
            <li>
              <p>Node.js</p>
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
            </li>
          </ul>
          <ul>
            <h4>Program Tools</h4>
            <li>
              <p>HTML</p>
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
            </li>
            <li>
              <p>CSS</p>
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
            </li>
            <li>
              <p>Java Script</p>
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
            </li>
          </ul>
        </S.Skills__item>
      </S.Skills>
      <S.Button>
        <button>Vamos conversar?</button>
      </S.Button>
    </>
  )
}

export default Curriculo
