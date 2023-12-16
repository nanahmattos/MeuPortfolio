import * as S from './styles'
import Projeto from '../../components/Projeto'
import BarbieImage from '../../assets/projetos/barbie_vercel.png'
import Legenda from '../../components/Legends'
import DisneyImage from '../../assets/projetos/clonedisney.png'
import RaymanImage from '../../assets/projetos/raymanLegends.png'

const PortfolioWeb = () => {
  return (
    <S.PortfolioWeb__Container id="portfolio">
      <S.PortfolioWeb__Titulo>
        <h2>Projetos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </S.PortfolioWeb__Titulo>
      <S.PortfolioWeb__SectionDir id="Work_1">
        <>
          <Legenda
            numberWork="1"
            titulo="Netflix Barbie-verso"
            subTitulo="front-end"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
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
      <S.PortfolioWeb__SectionEsq id="Work_2">
        <Projeto
          imagemSrc={DisneyImage}
          linkVercel="https://clone-disneyplus-hazel-delta.vercel.app/"
          linkGit="https://github.com/nanahmattos/clone_disneyplus.git"
        />
        <S.Portfolio__SectionEsq_Mobile>
          <Legenda
            numberWork="2"
            titulo="Clone Disney+"
            subTitulo="front-end"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </S.Portfolio__SectionEsq_Mobile>
      </S.PortfolioWeb__SectionEsq>
      <S.PortfolioWeb__SectionDir id="Work_3">
        <>
          <Legenda
            numberWork="3"
            titulo="Rayman Legends"
            subTitulo="front-end"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </>
        <Projeto
          imagemSrc={RaymanImage}
          linkVercel="https://rayman-legends-game.vercel.app/"
          linkGit="https://github.com/nanahmattos/landingPage_rayman_legends.git"
        />
      </S.PortfolioWeb__SectionDir>
      <S.PortfolioWeb__SectionEsq id="Work_4">
        <Projeto
          imagemSrc={BarbieImage}
          linkVercel="https://netflix-barbie.vercel.app/"
          linkGit="https://github.com/nanahmattos/ebac_task_netflix_barbie.git"
        />
        <S.Portfolio__SectionEsq_Mobile>
          <Legenda
            numberWork="4"
            titulo="ThisPortfolio"
            subTitulo="front-end"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </S.Portfolio__SectionEsq_Mobile>
      </S.PortfolioWeb__SectionEsq>
    </S.PortfolioWeb__Container>
  )
}
export default PortfolioWeb
