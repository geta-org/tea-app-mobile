import 'styled-components'
import { THEME } from '../styles/theme'

type ThemeType = typeof THEME

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
