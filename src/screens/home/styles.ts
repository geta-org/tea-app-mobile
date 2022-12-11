import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 40px;
`

export const HomeWrapper = styled.View`
  background-color: blue;
  width: 20px;
  height: 20px;
`
export const BtnSair = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary[600]};
  position: relative;
  border: 2px solid #000;
  outline: none;
  padding: 5px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`
