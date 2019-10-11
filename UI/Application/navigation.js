import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from './src/screens/splash/splash.screen'
import HomeScreen from "./src/screens/home/home.screen";
import GameScreen from "./src/screens/game/game.screen";
import MenuScreen from "./src/screens/menu/menu.screen";
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
  }
},
  {
    initialRouteName: "Game"
  });


export default createAppContainer(Navigation)