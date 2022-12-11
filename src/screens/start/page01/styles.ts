import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.body};
`
export const ContentsWrapper = styled.View`
  flex: 1;
  justify-content: center;
`

export const TitleWrapper = styled.View`
  width: 282px;
  height: 105px;
`
export const BtnNext = styled.TouchableOpacity`
  position: relative;
  outline: none;
  padding: 5px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`
