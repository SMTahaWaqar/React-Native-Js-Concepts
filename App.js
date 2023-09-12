import React from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const fruit = () => {
    console.warn('Fucntion called');
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Button And OnPress Event</Text>
      <Button title="On Press" onPress={fruit} color={'black'} />
    </View>
  );
};

export default App;
