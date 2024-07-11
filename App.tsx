import { StatusBar } from 'expo-status-bar';
import RootNavigator from 'navigation/RootNavigator';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { useFonts } from "expo-font";
import { useEffect } from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({
    poppins_regular: require("./assets/fonts/poppins_regular.ttf"),
    poppins_semibold: require("./assets/fonts/poppins_semibold.ttf"),
    poppins_bold: require("./assets/fonts/poppins_bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // setIsLoading(false);
    }
  }, [fontsLoaded]);

  return (
    <RootNavigator/>
  );
}