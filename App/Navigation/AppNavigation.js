import { StackNavigator } from 'react-navigation'

import MainScreen from '../Containers/Main/Main.Screen'
import FetchScreen from '../Containers/Fetch/Fetch.Screen'
import ListScreen from '../Containers/List/List.Screen'
import TabScreen from '../Containers/Tab/Tab.Screen'
import ProfileScreen from '../Containers/Profile/Profile.Screen'
import AsyncStorageScreen from '../Containers/AsyncStorage/AsyncStorage.Screen'
import MapScreen from '../Containers/Map/Map.Screen'
import WebScreen from '../Containers/Web/Web.Screen'
import TimeScreen from '../Containers/Time/Time.Screen'
import FacebookScreen from '../Containers/Facebook/Facebook.Screen'
import ModalScreen from '../Containers/Modal/Modal.Screen'
import LaunchScreen from '../Containers/Launch/Launch.Screen'
import AnimationScreen from '../Containers/Animation/Animation.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    MainScreen: { screen: MainScreen },
    FetchScreen: { screen: FetchScreen },
    ListScreen: { screen: ListScreen },
    TabScreen: { screen: TabScreen },
    ProfileScreen: { screen: ProfileScreen },
    AsyncStorageScreen: { screen: AsyncStorageScreen },
    MapScreen: { screen: MapScreen },
    WebScreen: { screen: WebScreen },
    TimeScreen: { screen: TimeScreen },
    FacebookScreen: { screen: FacebookScreen },
    ModalScreen: { screen: ModalScreen },
    AnimationScreen: { screen: AnimationScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'AnimationScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default PrimaryNav
