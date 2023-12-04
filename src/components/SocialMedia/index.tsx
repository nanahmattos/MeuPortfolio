import * as S from './styles'
import Photoshop from '../../assets/icons/photoshop.svg'
import Illustrator from '../../assets/icons/illustrator.svg'
import PostIg from '../../assets/socialmedia/paradoxoDoReels.png'
import FeedPhone from '../../assets/socialmedia/feed_iphone.png'
import Feed from '../../assets/socialmedia/feed.png'

const SocialMedia = () => {
  return (
    <section>
      <S.SocialMedia__content>
        <S.SocialMedia__numberWork id="Work_1">1</S.SocialMedia__numberWork>
        <S.SocialMedia__item>
          <h2>Vamo de Publi</h2>
          <h3>Social Media</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            tempora hic doloremque, inventore quaerat molestiae quos blanditiis
            soluta nemo officia? Ipsum unde laudantium veniam expedita corporis
            tempora quas optio beatae.
          </p>
          <h3>Ferramentas utilizadas</h3>
          <img src={Photoshop} alt="Icone do Photoshop" />
          <img src={Illustrator} alt="Icone do Illustrator" />
        </S.SocialMedia__item>
        <S.SocialMedia__image>
          <img src={PostIg} alt="Imagem de post Paradodo do Reels" />
          <ul>
            <li>
              <S.PaletaDeCor16ffaa4>
                <div></div>
                <span>#16ffaa4</span>
              </S.PaletaDeCor16ffaa4>
            </li>
            <li>
              <S.PaletaDeCor16ffaa4>
                <div></div>
                <span>#16ffaa4</span>
              </S.PaletaDeCor16ffaa4>
            </li>
            <li>
              <S.PaletaDeCor16ffaa4>
                <div></div>
                <span>#16ffaa4</span>
              </S.PaletaDeCor16ffaa4>
            </li>
          </ul>
        </S.SocialMedia__image>
      </S.SocialMedia__content>
      <S.SocialMedia__Feedimage>
        <div>
          <img src={FeedPhone} alt="" />
        </div>
        <S.FeedImage>
          <img src={Feed} alt="" />
        </S.FeedImage>
      </S.SocialMedia__Feedimage>
    </section>
  )
}

export default SocialMedia
