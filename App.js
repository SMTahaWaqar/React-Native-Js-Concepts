/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const data = [
    {
      id: 1,
      name: 'Taha',
      data: ['Js', 'Python', 'Java'],
    },
    {
      id: 2,
      name: 'Umer',
      data: ['Js', 'Python', 'Java'],
    },
    {
      id: 3,
      name: 'Arham',
      data: ['Js', 'Python', 'Java'],
    },
    {
      id: 4,
      name: 'Maaz',
      data: ['Js', 'Python', 'Java'],
    },
    {
      id: 5,
      name: 'Ali',
      data: ['Js', 'Python', 'Java'],
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Section List in React Native</Text>
      <SectionList
        sections={data}
        renderItem={({item}) => <Text style={{fontSize: 25}}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
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
