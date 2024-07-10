import { RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "screens/home/HomeScreen";

export type RootStackParamList = {
  home : undefined,
}

export type HomeScreenRouteProps = RouteProp<RootStackParamList, "home">