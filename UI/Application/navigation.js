import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';

import SplashScreen from './src/screens/splash/splash.screen'
import HomeScreen from "./src/screens/home/home.screen";
import GameScreen from "./src/screens/game/game.screen";
import MenuScreen from "./src/screens/menu/menu.screen";
import LoginScreen from './src/screens/account/login/login.screen';
import RegisterScreen from './src/screens/account/register/register.screen';


const Navigation = createStackNavigator({
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
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
},
  {
    initialRouteName: "Login"
  });

const RoutedApp = createAppContainer(Navigation)

export default class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <RoutedApp />
      </ApplicationProvider>
    );
  }
}