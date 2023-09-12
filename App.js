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
      <Text style={{fontSize: 30}}>Grid with Dynamic Data</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map(user => (
          <Text style={styles.item}>{user.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default App;
