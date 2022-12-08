import { Loading } from '../../components/Loading'
import { HomeContainer, HomeWrapper, Title } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Title>Hello World!</Title>
      <HomeWrapper>
        <Loading />
      </HomeWrapper>
    </HomeContainer>
  )
}
