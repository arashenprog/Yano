import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from './src/screens/splash/splash.screen'
import HomeScreen from "./src/screens/home/home.screen";
const Navigation = createStackNavigator({
  Splash: {
    screen: SplashScreen
  },
  Home: {
    screen: HomeScreen
  }
},
  {
    initialRouteName: "Splash"
  });


export default createAppContainer(Navigation)