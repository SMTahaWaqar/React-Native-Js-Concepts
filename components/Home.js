/* eslint-disable prettier/prettier */
import { Button, Text, View } from "react-native";

export const Home = (props) => {
    console.warn(props.route.params)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Home Screen</Text>
        <Text style={{fontSize: 30}}>{props.route.params.name}</Text>
      </View>
    );
  };