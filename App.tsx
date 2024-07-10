import { StatusBar } from 'expo-status-bar';
import RootNavigator from 'navigation/RootNavigator';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default function App() {
  return (
    <RootNavigator/>
  );
}