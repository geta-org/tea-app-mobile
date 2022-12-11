import {
  BtnNext,
  ContentsWrapper,
  HomeContainer,
  Title,
  TitleWrapper,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import BigBrain from '../../../assets/start/SVG/BigBrain.svg'
import TeaIcon from '../../../assets/start/SVG/TeaIcon.svg'

export function Start02() {
  const navigation = useNavigation()

  const next = () => {
    navigation.navigate('start03')
  }

  return (
    <HomeContainer>
      <TeaIcon width={150} height={100} />
      <ContentsWrapper>
        <BigBrain width={300} height={320} />
        <TitleWrapper>
          <Title>
            No TEA APP são apresentadas formas de manejo da criança, assim como
            músicas para auxiliar os pais ou cuidadores a lidar com situações
            mais desafiadoras na rotina da criança.
          </Title>
        </TitleWrapper>
      </ContentsWrapper>

      <BtnNext onPress={next}>
        <Title>Seguinte</Title>
      </BtnNext>
    </HomeContainer>
  )
}
