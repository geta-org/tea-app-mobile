import { BtnSair, HomeContainer, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  const sair = () => {
    navigation.navigate('login')
  }

  return (
    <HomeContainer>
      <Title>Hello World!</Title>
      <BtnSair onPress={sair}>
        <Title>SAIR</Title>
      </BtnSair>
    </HomeContainer>
  )
}
