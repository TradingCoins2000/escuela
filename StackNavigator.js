import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Pantalla1 from './screens/Pantalla1';
import Pantalla2 from './screens/Pantalla2';
import Pantalla3 from './screens/Pantalla3';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Pantalla1" component={Pantalla1} />
      <Stack.Screen name="Pantalla2" component={Pantalla2} />
      <Stack.Screen name="Pantalla3" component={Pantalla3} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
