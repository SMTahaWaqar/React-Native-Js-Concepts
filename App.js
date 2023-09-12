import React from 'react';
import {Button, Text, View} from 'react-native';
import UniversityData from './components/UniversityData';

const App = () => {
  return (
    <View>
      <UniversityData />
      <Text style={{fontSize: 30}}>Components</Text>
      <UserData />
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 15}}>Name : Taha</Text>
      <Text style={{fontSize: 15}}>Age : 21</Text>
      <Text style={{fontSize: 15}}>Email : taha@developer.com</Text>
    </View>
  );
};

export default App;
