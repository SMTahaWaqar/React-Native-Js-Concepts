import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [display, setDisplay] = useState(false);
  const resetFormData = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Simple Form In React Native</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        style={styles.textInput}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter your email"
        value={email}
        style={styles.textInput}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Enter a password"
        value={password}
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={text => setPassword(text)}
      />
      <View style={{marginBottom: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="Clear Details" onPress={resetFormData} />
      {display ? (
        <View>
          <Text style={{fontSize: 15}}>User Name is : {name}</Text>
          <Text style={{fontSize: 15}}>Email : {email}</Text>
          <Text style={{fontSize: 15}}>Password : {password}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

export default App;
