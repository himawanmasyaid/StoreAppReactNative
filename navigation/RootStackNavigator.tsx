import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "screens/home/HomeScreen";

const RootStackNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
  });

export default RootStackNavigator