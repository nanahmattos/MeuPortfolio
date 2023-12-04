import * as S from './styles'
import Photoshop from '../../assets/icons/photoshop.svg'
import Illustrator from '../../assets/icons/illustrator.svg'
import BehanceIcon from '../../assets/icons/behance_2.svg'
import AfterEffects from '../../assets/icons/afterEffects.svg'
const Banners = () => {
  return (
    <S.ContainerBannerMovie>
      <S.ContainerBanners>
        <S.Banners__numberWork id="Work_2">2</S.Banners__numberWork>
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
          <img src={Photoshop} alt="Icone do Photoshop" />
          <img src={Illustrator} alt="Icone do Illustrator" />
          <S.Bannerlinha></S.Bannerlinha>
          <S.BehanceButton>
            <img src={BehanceIcon} alt="icone do behance fundo branco" />
            <a href="#">Ver mais</a>
          </S.BehanceButton>
        </S.Banners__item>
      </S.ContainerBanners>
      {/* CONTAINER DA LEGENDA DO WORK 4 */}
      <S.ContainerMovieMotion>
        <S.MovieMotion__numberWork id="Work_3">3</S.MovieMotion__numberWork>
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
          <img src={AfterEffects} alt="Icone do After Effects" />
          <img src={Photoshop} alt="Icone do Photoshop" />
          <img src={Illustrator} alt="Icone do Illustrator" />
        </S.MovieMotion__item>
      </S.ContainerMovieMotion>
    </S.ContainerBannerMovie>
  )
}

export default Banners
