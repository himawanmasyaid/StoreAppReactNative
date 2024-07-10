import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "screens/home/HomeScreen";

const RootStack = createStackNavigator();

const RootNavigator = () => {
    return (
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="home">
          <RootStack.Screen name="home" component={HomeScreen} options={ {headerShown: false} } />
        </RootStack.Navigator>
      </NavigationContainer>
    )
  }


export default RootNavigator;