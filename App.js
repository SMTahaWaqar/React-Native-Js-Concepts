/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};

export default App;
