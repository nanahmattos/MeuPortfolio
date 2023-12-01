import * as S from './styles'
import movieMotion from '../../assets/movie_motion/movieMotion_image.png'

const MovieMotion = () => {
  return (
    <S.ContainerMovieMotion>
      <h4>Clique na imagem para ser direcionado ao Behance</h4>
      <a href="https://www.behance.net/gallery/184559445/MotionDesign-Divulgacao-de-produto">
        <img src={movieMotion} alt="Capa de video movie motion" />
      </a>
    </S.ContainerMovieMotion>
  )
}
export default MovieMotion
