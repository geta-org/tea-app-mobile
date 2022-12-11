import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`
export const LoginContainer = styled.View`
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary[700]};
  border-radius: 20px;
  padding: 20px;
  border: 2px solid #000;
  outline: none;
`

export const InputWrapper = styled.View`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  width: 300px;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
`

export const TitleInput = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.heading};
`
export const Input = styled.TextInput`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  padding: 5px;
  border-radius: 10px;
`

export const BtnCadastrar = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary[800]};
  position: relative;
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  top: 0;
  left: 0;
  border: 2px solid #000;
  outline: none;
  padding: 5px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`
export const BtnLogin = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary[600]};
  position: relative;
  width: 300px;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  top: 0;
  left: 0;
  border: 2px solid #000;
  outline: none;
  padding: 5px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
