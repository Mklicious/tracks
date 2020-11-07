import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const trackListFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetails" component={TrackDetailsScreen} />
    </Stack.Navigator>
  );
};
const LoginFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="MainFlow" component={MainFlow} />
    </Stack.Navigator>
  );
}
const MainFlow = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="TrackList" component={trackListFlow} />
      <BottomTab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <LoginFlow/>
    </NavigationContainer>
  );
}