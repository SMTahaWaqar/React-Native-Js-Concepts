/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {Login} from './components/Login';

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

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  );
};

export default App;
