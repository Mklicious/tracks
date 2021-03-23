import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TrackListFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{title: 'Tracks'}}
      />
      <Stack.Screen
        name="TrackDetails"
        component={TrackDetailsScreen}
        options={{title: 'Track details'}}
      />
    </Stack.Navigator>
  );
};
const LoginFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
 
const TrackCreateFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{ title: 'Add a track' }}
      />
    </Stack.Navigator>
  );
}

const AccountFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: 'Account' }}
      />
    </Stack.Navigator>
  );
}

const MainFlow = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="TrackList"
        component={TrackListFlow}
        options={{
          title: 'Tracks',
          tabBarIcon: () => <FontAwesome name="list" size={20}/>
        }}
      />
      <BottomTab.Screen
        name="TrackCreate"
        component={TrackCreateFlow}
        options={{
          title: 'Add Track',
          tabBarIcon: () => <FontAwesome name="plus" size={20}/>
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountFlow}
        options={{
          title: 'Account',
          tabBarIcon: () => <FontAwesome name="gear" size={20}/>
        }}
      />
    </BottomTab.Navigator>
  );
};

const App = () => {
  const { state } = useContext(AuthContext);
  if (state.isLoading) {
    return <LoadingScreen/>
  }

  return(
    <NavigationContainer ref={(navigator) => { setNavigator(navigator) }}>
      {state.token === null ? <LoginFlow/> : <MainFlow/>}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
