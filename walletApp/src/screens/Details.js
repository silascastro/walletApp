import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View} from 'react-native';

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
      return{
        title: 'Details Screen'
      }
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Button title="Go back"
          onPress={()=> this.props.navigation.goBack()}/>
        </View>
      );
    }
}