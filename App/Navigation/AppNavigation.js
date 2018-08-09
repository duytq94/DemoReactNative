import {StackNavigator} from 'react-navigation'

import MainScreen from '../Containers/Main/Main.Screen'
import FetchScreen from '../Containers/Fetch/Fetch.Screen'
import ListScreen from '../Containers/List/List.Screen'
import TabScreen from '../Containers/Tab/Tab.Screen'
import ProfileScreen from '../Containers/Profile/Profile.Screen'
import AsyncStorageScreen from '../Containers/AsyncStorage/AsyncStorage.Screen'
import WebScreen from '../Containers/Web/Web.Screen'
import TimeScreen from '../Containers/Time/Time.Screen'
import ModalScreen from '../Containers/Modal/Modal.Screen'
import LaunchScreen from '../Containers/Launch/Launch.Screen'
import AnimationScreen from '../Containers/Animation/Animation.Screen'
import RestaurantAnimationScreen from '../Containers/RestaurantAnimation/RestaurantAnimation.Screen'
import RestaurantAnimation2Screen from '../Containers/RestaurantAnimation/RestaurantAnimation2.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: {screen: LaunchScreen},
    MainScreen: {screen: MainScreen},
    FetchScreen: {screen: FetchScreen},
    ListScreen: {screen: ListScreen},
    TabScreen: {screen: TabScreen},
    ProfileScreen: {screen: ProfileScreen},
    AsyncStorageScreen: {screen: AsyncStorageScreen},
    WebScreen: {screen: WebScreen},
    TimeScreen: {screen: TimeScreen},
    ModalScreen: {screen: ModalScreen},
    AnimationScreen: {screen: AnimationScreen},
    RestaurantAnimationScreen: {screen: RestaurantAnimationScreen},
    RestaurantAnimation2Screen: {screen: RestaurantAnimation2Screen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'MainScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav
