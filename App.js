import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

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
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Component in FlatList</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
      />
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
