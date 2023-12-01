import HomeAbout from '../../components/HomeAbout'
import Header from '../../components/Header'
import * as S from './styles'

const Home = () => {
  return (
    <S.Container>
      <HomeAbout />
      <Header />
    </S.Container>
  )
}

export default Home
