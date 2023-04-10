import { Container } from './styles'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Stars({ rating }) {
  const stars = []

  for (let i = 0; i < 5; i++) {
    let star = i < rating ? <AiFillStar key={String(i)} /> : <AiOutlineStar />
    stars.push(star)
  }

  return <Container>{stars.map(star => star)}</Container>
}
