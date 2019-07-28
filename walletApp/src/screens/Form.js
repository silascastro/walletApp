import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valor: '',
        }
    }


    formatValue(value){
        console.log("value: ",value);
        if(value != ''){
            let aux = parseInt(value);
            console.log(aux.toFixed(2));
            return aux.toFixed(2);
        }
        return '0';
    }

    

    static navigationOptions = ({navigation}) => {
      return{
        title: 'Formulário'
      }
    }
    render() {
      return (
        <View style={styles.container}>
          <TextInput placeholder="Descrição" style={styles.description} underlineColorAndroid='blue' />
          <TextInput placeholder="(R$) Valor" value={this.formatValue(this.state.valor)} onChangeText={(value) => this.setState({valor: value})} style={styles.value} underlineColorAndroid="red" keyboardType="numbers-and-punctuation"/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "flex-start", 
        backgroundColor: '#f7f7f7',
        padding: 20
    },
    description: {
        width: 250,
    },

    value: {
        width: 250,
    }
});