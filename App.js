import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const data = [
    {
      id: 1,
      name: 'Taha',
    },
    {
      id: 2,
      name: 'Umer',
    },
    {
      id: 3,
      name: 'Arham',
    },
    {
      id: 4,
      name: 'Maaz',
    },
    {
      id: 5,
      name: 'Ali',
    },
    {
      id: 3,
      name: 'Arham',
    },
    {
      id: 4,
      name: 'Maaz',
    },
    {
      id: 5,
      name: 'Ali',
    },
    {
      id: 3,
      name: 'Arham',
    },
    {
      id: 4,
      name: 'Maaz',
    },
    {
      id: 5,
      name: 'Ali',
    },
    {
      id: 3,
      name: 'Arham',
    },
    {
      id: 4,
      name: 'Maaz',
    },
    {
      id: 5,
      name: 'Ali',
    },
    {
      id: 3,
      name: 'Arham',
    },
    {
      id: 4,
      name: 'Maaz',
    },
    {
      id: 5,
      name: 'Ali',
    },
    {
      id: 3,
      name: 'Arham',
    },
    {
      id: 4,
      name: 'Maaz',
    },
    {
      id: 5,
      name: 'Karl',
    },
    {
      id: 5,
      name: 'Marx',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList in React Native</Text>
      <ScrollView style={{marginBottom: 50}}>
        {data.map(user => (
          <Text style={styles.textContainer}>{user.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 18,
    color: 'blue',
    backgroundColor: '#dffdff',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
});

export default App;
