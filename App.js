import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [name, setName] = useState();
  return (
    <View>
      <Text style={{fontSize: 30}}>Handle Text Input</Text>
      <Text style={{fontSize: 30}}>Name: {name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        onChangeText={text => setName(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'red',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

export default App;
