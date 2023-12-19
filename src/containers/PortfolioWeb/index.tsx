import * as S from './styles'
import Projeto from '../../components/Projeto'
import BarbieImage from '../../assets/projetos/barbie_vercel.png'
import Legenda from '../../components/Legends'
import DisneyImage from '../../assets/projetos/clonedisney.png'
import RaymanImage from '../../assets/projetos/raymanLegends.png'
import MyportfolioImage from '../../assets/projetos/meuportfolio.png'
const PortfolioWeb = () => {
  return (
    <S.PortfolioWeb__Container id="portfolio">
      <S.PortfolioWeb__Titulo>
        <h2>Projetos</h2>
        <p>
          Explore alguns dos meus projetos de estudo como desenvolvedora
          front-end.
        </p>
      </S.PortfolioWeb__Titulo>
      <S.PortfolioWeb__SectionDir>
        <>
          <Legenda
            numberWork="1"
            titulo="Netflix Barbie-verso"
            subTitulo="HTML • CSS • SASS • JavaSript"
            texto="Neste projeto, desenvolvi um clone da página inicial de compra da Netflix, incorporando o encantador tema da Barbie. A landing page foi criada por meio de estudos aprofundados em SASS, JavaScript, HTML e CSS, destacando também a utilização eficaz das ferramentas do DevTools."
          />
        </>
        <>
          <Projeto
            imagemSrc={BarbieImage}
            linkVercel="https://netflix-barbie.vercel.app/"
            linkGit="https://github.com/nanahmattos/ebac_task_netflix_barbie.git"
          />
        </>
      </S.PortfolioWeb__SectionDir>
      <S.PortfolioWeb__SectionEsq>
        <Projeto
          imagemSrc={DisneyImage}
          linkVercel="https://clone-disneyplus-hazel-delta.vercel.app/"
          linkGit="https://github.com/nanahmattos/clone_disneyplus.git"
        />
        <S.Portfolio__SectionEsq_Mobile>
          <Legenda
            numberWork="2"
            titulo="Clone Disney+"
            subTitulo="HTML • CSS • SASS • JavaSript"
            texto="Realizei o clone da página inicial de compra da DisneyPlus, estabelecendo-a como uma referência essencial para o projeto Netflix Barbie-verso. Assim como no primeiro projeto, empreguei SASS, JavaScript, HTML e boas práticas de CSS para garantir uma experiência de usuário consistente."
          />
        </S.Portfolio__SectionEsq_Mobile>
      </S.PortfolioWeb__SectionEsq>
      <S.PortfolioWeb__SectionDir>
        <>
          <Legenda
            numberWork="3"
            titulo="Rayman Legends"
            subTitulo="Bootstrap"
            texto="Para esta landing page dedicada ao jogo Rayman Legends, concentrei-me em estudos avançados de bootstrap e responsividade. O resultado é uma interface adaptativa e eficiente, destacando a capacidade de aplicar conceitos robustos em design web."
          />
        </>
        <Projeto
          imagemSrc={RaymanImage}
          linkVercel="https://rayman-legends-game.vercel.app/"
          linkGit="https://github.com/nanahmattos/landingPage_rayman_legends.git"
        />
      </S.PortfolioWeb__SectionDir>
      <S.PortfolioWeb__SectionEsq>
        <Projeto
          imagemSrc={MyportfolioImage}
          linkVercel="https://meu-portfolio-nu-nine.vercel.app/"
          linkGit="https://github.com/nanahmattos/MeuPortfolio.git"
        />
        <S.Portfolio__SectionEsq_Mobile>
          <Legenda
            numberWork="4"
            titulo="MyPortfolio"
            subTitulo="React • TypeScript"
            texto="Para meu portfólio utilizei o framework React com TypeScript, React Router, Hooks e Styled Components para criar uma experiência de usuário fluida e responsiva. Além disso, implementei animações com a biblioteca react-spring, demonstrando minha habilidade em criar interfaces interativas e visualmente atraentes."
          />
        </S.Portfolio__SectionEsq_Mobile>
      </S.PortfolioWeb__SectionEsq>
    </S.PortfolioWeb__Container>
  )
}
export default PortfolioWeb
