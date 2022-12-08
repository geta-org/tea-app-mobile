import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { THEME } from '../styles/theme'

export function GlobalContext({ children }: any) {
  return (
    <ThemeProvider theme={THEME}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </ThemeProvider>
  )
}
