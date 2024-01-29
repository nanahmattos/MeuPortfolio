import * as S from './styles'

export type ButtonProps = {
  type: 'code' | 'site'
  children: JSX.Element
  to: string
}
const Button = ({ children, type, to }: ButtonProps) => {
  return (
    <S.Button
      to={to as string}
      type={type}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </S.Button>
  )
}

export default Button
