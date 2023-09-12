/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {Login} from './components/Login';
import {Home} from './components/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'blue'},
          headerTitleStyle: {fontSize: 25},
          headerTintColor: 'pink',
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: props => <Button title="left" />,
            headerRight: props => <Button title="right" />,
            headerStyle: {backgroundColor: 'skyblue'},
            headerTitleStyle: {fontSize: 40},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
