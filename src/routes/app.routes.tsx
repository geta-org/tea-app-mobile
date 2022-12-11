import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/home'
import { LoginPage } from '../screens/login'
import { Start01 } from '../screens/start/page01'
import { Start02 } from '../screens/start/page02'
import { Start03 } from '../screens/start/page03'
import { Start04 } from '../screens/start/page04'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={LoginPage} />
      <Screen name="home" component={Home} />
      <Screen name="start01" component={Start01} />
      <Screen name="start02" component={Start02} />
      <Screen name="start03" component={Start03} />
      <Screen name="start04" component={Start04} />
    </Navigator>
  )
}
