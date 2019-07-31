import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View, TextInput, Picker, Alert} from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';
import {TextInputMask } from 'react-native-masked-text';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valor: '0',
            description: '',
            language: ''
        }
    }

    static navigationOptions = ({navigation}) => {
      return{
        title: 'Formulário'
      }
    }
    render() {
      return (
        <View style={styles.container}>
          <TextInput placeholder="Descrição" style={styles.description} 
          underlineColorAndroid='blue'
          onChangeTex={(text) => this.setState({description: text})}/>
          <TextInputMask type={'money'} options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: ''}} 
            value={this.state.valor}
            onChangeText={text => {
              this.setState({
                  valor: text
              })
            }}
            placeholder="Valor: (R$)"
            style={styles.value}
            underlineColorAndroid="blue"
          />
          <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 250}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label="Java 💵" value="java" />
            <Picker.Item label="JavaScript 💸" value="js" />
          </Picker>


          <View style={styles.buttonview}>
            <Button style={styles.button} title="OK" onPress={() => Alert.alert('teste')
            /*this.props.navigation.goBack()*/}/>
          </View>
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
    value: {
      width: 250,
    },
    description: {
      width: 250,
    },
    type: {
      width: 250,
    },
    buttonview: {
      width: 250,
      
    },
    button:{
      borderRadius: 50,
    },

});