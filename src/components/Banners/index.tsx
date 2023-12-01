import * as S from './styles'
import photoshop from '../../assets/icons/photoshop.png'
import illustrator from '../../assets/icons/illustrator.svg'

const Banners = () => {
  return (
    <S.ContainerBannerMovie>
      <S.ContainerBanners>
        <S.Banners__numberWork>2</S.Banners__numberWork>
        <S.Banners__item>
          <h2>Banners&Flyers</h2>
          <h3>Graphic designer</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            tempora hic doloremque, inventore quaerat molestiae quos blanditiis
            soluta nemo officia? Ipsum unde laudantium veniam expedita corporis
            tempora quas optio beatae.
          </p>
          <h3>Ferramentas utilizadas</h3>
          <img src={photoshop} alt="Icone do Photoshop" />
          <img src={illustrator} alt="Icone do Illustrator" />
        </S.Banners__item>
      </S.ContainerBanners>
      {/* CONTAINER DA LEGENDA DO WORK 4 */}
      <S.ContainerMovieMotion>
        <S.MovieMotion__numberWork>3</S.MovieMotion__numberWork>
        <S.MovieMotion__item>
          <h2>Publicidade</h2>
          <h3>Movie Motion</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            tempora hic doloremque, inventore quaerat molestiae quos blanditiis
            soluta nemo officia? Ipsum unde laudantium veniam expedita corporis
            tempora quas optio beatae.
          </p>
          <h3>Ferramentas utilizadas</h3>
          <img src={photoshop} alt="Icone do Photoshop" />
          <img src={illustrator} alt="Icone do Illustrator" />
        </S.MovieMotion__item>
      </S.ContainerMovieMotion>
    </S.ContainerBannerMovie>
  )
}

export default Banners
