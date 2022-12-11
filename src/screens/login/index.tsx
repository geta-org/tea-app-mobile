import { useState } from 'react'
import {
  BtnCadastrar,
  BtnLogin,
  HomeContainer,
  Input,
  InputWrapper,
  LoginContainer,
  TitleInput,
} from './styles'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../utils/firebase'
import { useNavigation } from '@react-navigation/native'

export function LoginPage() {
  const [email, setEmail] = useState(``)
  const [senha, setSenha] = useState(``)

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const navigation = useNavigation()

  const CriarConta = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((UserCredential) => {
        const user = UserCredential.user
        navigation.navigate('start01')
      })
      .catch((error) => {
        if (
          // eslint-disable-next-line eqeqeq
          error == 'FirebaseError: Firebase: Error (auth/email-already-in-use).'
        ) {
          alert('email já foi cadastrado')
        }
        console.log(error)
      })
  }
  const Logar = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((UserCredential) => {
        const user = UserCredential.user
        navigation.navigate('start01')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <HomeContainer>
      <LoginContainer>
        <TitleInput>Email</TitleInput>
        <InputWrapper>
          <Input onChangeText={(text) => setEmail(text)} />
        </InputWrapper>
        <TitleInput>Senha</TitleInput>
        <InputWrapper>
          <Input
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />
        </InputWrapper>
        <BtnLogin onPress={Logar}>
          <TitleInput>Entrar</TitleInput>
        </BtnLogin>
        <BtnCadastrar onPress={CriarConta}>
          <TitleInput>Cadastrar</TitleInput>
        </BtnCadastrar>
      </LoginContainer>
    </HomeContainer>
  )
}
