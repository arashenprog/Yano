import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import {mapping, light as lightTheme} from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import SplashScreen from './src/screens/splash/splash.screen'
import HomeScreen from "./src/screens/home/home.screen";
import GameScreen from "./src/screens/game/game.screen";
import MenuScreen from "./src/screens/menu/menu.screen";
import RegisterScreen from "./src/screens/account/register/register.screen";
import LoginScreen from './src/screens/account/login/login.screen';


const Routes = createStackNavigator({
  Splash: {
    screen: SplashScreen
  },
  Home: {
    screen: HomeScreen
  },
  Menu: {
    screen: MenuScreen
  },
  Game: {
    screen: GameScreen
  },
  Register: {
    screen: RegisterScreen
  },
  Login: {
    screen: LoginScreen
  }
},
  {
    initialRouteName: 'Splash'
  });

const RoutedApp = createAppContainer(Routes);

export default class Navigation extends React.Component {

  render() {
    return (
        <RoutedApp />
    );
  }
}