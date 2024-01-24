import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../../components/Card'

import * as S from './styles'

const ProjectList = ({ project }: Props) => {
  return (
    <S.Container>
      <h2>Projetos</h2>
      <div className="paddingBottom">
        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {project.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                id={item.id}
                number={item.number}
                title={item.title}
                subTitle={item.subTitle}
                text={item.text}
                image={item.image}
                linkGit={item.linkGit}
                linkVercel={item.linkVercel}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </S.Container>
  )
}
export default ProjectList
