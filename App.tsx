import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/screens/login_screen";
import SignUpScreen from "./src/screens/signup_screen";
import MenuScreen from "./src/screens/menu_screen";
import LocationScreen from './src/screens/location_screen';
import HealthScreen from './src/screens/health_screen';
import StepsScreen from "./src/screens/steps_screen";
import AlarmScreen from './src/screens/alarm_screen'; 

export type StackParamList = {
  Login: undefined;
  SignUp: undefined;
  Menu: undefined;
  Location: undefined;
  Health: undefined;
  Steps: undefined;
  Alarm: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="Steps" component={StepsScreen} />
        <Stack.Screen name="Alarm" component={AlarmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}