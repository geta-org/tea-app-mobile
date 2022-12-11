import {
  BtnNext,
  ContentsWrapper,
  HomeContainer,
  Title,
  TitleWrapper,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import Thinkin from '../../../assets/start/SVG/Thinkin.svg'
import TeaIcon from '../../../assets/start/SVG/TeaIcon.svg'

export function Start03() {
  const navigation = useNavigation()

  const next = () => {
    navigation.navigate('start04')
  }

  return (
    <HomeContainer>
      <TeaIcon width={150} height={100} />
      <ContentsWrapper>
        <Thinkin width={300} height={320} />
        <TitleWrapper>
          <Title>
            Olá! Este é o TEA APP. Um aplicativo criado para auxiliar pais e
            cuidadores de crianças com Transtorno de Espectro Autista - TEA.
          </Title>
        </TitleWrapper>
      </ContentsWrapper>

      <BtnNext onPress={next}>
        <Title>Seguinte</Title>
      </BtnNext>
    </HomeContainer>
  )
}
