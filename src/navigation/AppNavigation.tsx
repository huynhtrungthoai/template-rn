import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../containers/HomeScreen/HomeScreen';
import SplashScreen from '../containers/SplashScreen/SplashScreen';

// ref
import {screenTracking, setNavigator} from '../utils/navigation';

const screenOption = {
  headerShown: false,
};

const Stack = createStackNavigator();
export default function AppNavigation() {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer
      ref={setNavigator(navigationRef)}
      onStateChange={screenTracking}>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={screenOption}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
