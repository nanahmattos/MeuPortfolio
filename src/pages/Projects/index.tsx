import Header from '../../components/Header'
import ProjectList from '../../containers/ProjectList'

import barbieImage from '../../assets/projetos/barbie_vercel.png'
import efoodImage from '../../assets/projetos/efood.png'
import disneyImage from '../../assets/projetos/clonedisney.png'
import raymanImage from '../../assets/projetos/raymanLegends.png'
import myportfolioImage from '../../assets/projetos/meuportfolio.png'

const projetos: ProjectProps[] = [
  {
    title: 'E-Food',
    subTitle: 'React • TS • AJAX • Redux',
    text: 'Nesse projeto pessoal desenvolvi um site de compras utilizando React, TypeScript, React Router, Redux para dinâmica, Styled Components para estilização e AJAX para a integração da API.',
    image: `${efoodImage}`,
    number: '1',
    linkGit: 'https://github.com/nanahmattos/projetct6_eFood',
    linkVercel: 'https://projetct6-e-food.vercel.app/',
    id: 1
  },
  {
    title: 'MyPortfolio',
    subTitle: 'React • TypeScript',
    text: 'Para meu portfólio utilizei o framework React com TypeScript, React Router, Hooks e Styled Components para criar uma experiência de usuário fluida e responsiva. Além disso, implementei animações com a biblioteca react-spring.',
    image: `${myportfolioImage}`,
    number: '2',
    linkVercel: 'https://meu-portfolio-nu-nine.vercel.app/',
    linkGit: 'https://github.com/nanahmattos/MeuPortfolio.git',
    id: 2
  },
  {
    title: 'Rayman Legends',
    subTitle: 'Bootstrap',
    text: 'Para esta landing page dedicada ao jogo Rayman Legends, concentrei-me em estudos do bootstrap e responsividade. O resultado é uma interface adaptativa e eficiente.',
    image: `${raymanImage}`,
    number: '3',
    linkVercel: 'https://rayman-legends-game.vercel.app/',
    linkGit: 'https://github.com/nanahmattos/landingPage_rayman_legends.git',
    id: 3
  },
  {
    title: 'Netflix Barbie',
    subTitle: 'HTML • CSS • SASS • JS',
    text: 'Neste projeto, desenvolvi um clone da página inicial de compra da Netflix, incorporando o tema da Barbie. A landing page foi criada por meio de estudos em SASS, JavaScript, HTML e CSS, destacando também a utilização eficaz das ferramentas do DevTools.',
    image: `${barbieImage}`,
    number: '4',
    linkVercel: 'https://netflix-barbie.vercel.app/',
    linkGit: 'https://github.com/nanahmattos/ebac_task_netflix_barbie.git',
    id: 4
  },
  {
    title: 'Clone Disney+',
    subTitle: 'HTML • CSS • SASS • JS',
    text: 'Realizei o clone da página inicial de compra da DisneyPlus, estabelecendo-a como uma referência essencial para o projeto Netflix Barbie-verso. Assim como no primeiro projeto, empreguei SASS, JavaScript, HTML e boas práticas de CSS para garantir uma experiência de usuário consistente.',
    image: `${disneyImage}`,
    number: '5',
    linkVercel: 'https://clone-disneyplus-hazel-delta.vercel.app/',
    linkGit: 'https://github.com/nanahmattos/clone_disneyplus.git',
    id: 5
  }
]
const Works = () => {
  return (
    <>
      <Header />
      <ProjectList project={projetos} />
    </>
  )
}
export default Works
