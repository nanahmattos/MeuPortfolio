import * as S from './styles'

type LegendasProps = {
  numberWork: string
  titulo: string
  subTitulo: string
  texto: string
}

const Legenda = ({ numberWork, titulo, subTitulo, texto }: LegendasProps) => {
  return (
    <S.Legends__item>
      <S.Legends__numberWork>{numberWork}</S.Legends__numberWork>
      <S.Legends__text>
        <h2>{titulo}</h2>
        <h3>{subTitulo}</h3>
        <p>{texto}</p>
      </S.Legends__text>
    </S.Legends__item>
  )
}

export default Legenda
