import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View,TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Home extends Component<Props> {
    static navigationOptions = ({navigation}) => {
      return{
        title: 'Home'
      }
    }
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 150}}>
                <Text style={{fontSize: 15, paddingLeft: 15,marginBottom: 3,borderLeftWidth: 3,borderLeftColor: 'green',color: 'black'}}>Receitas</Text> 
              </View>
              <View style={{width: 150, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15,color: 'green', fontWeight: 'bold'}}>R$ 0,00</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 150}}>
                <Text style={{fontSize: 15, paddingLeft: 15,borderLeftWidth: 3,borderLeftColor: 'red', color: 'black'}}>Despesas</Text>
              </View>
              <View style={{width: 150, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 15,color: 'red', fontWeight: 'bold'}}>R$ 0,00</Text>
              </View>
            </View>
            
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Teste</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('Form')} style={styles.fab}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        
        </View>

      );
    }
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 150,
    marginTop: 20,
    padding: 25,
    fontSize: 50,
    marginBottom: 5,
    marginLeft:15,
    //alignItems: 'center',
    marginRight:15, 
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2 //elevação do card
  },
  fab: {
    position: 'absolute',
    width: 50, height: 50,
    backgroundColor: 'blue',
    borderRadius: 30,
    bottom: 10, right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2
  },
  plus: {
    color: 'white',
    fontSize: 25,
  },
  container: {
    flex: 1,
    /*justifyContent: 'center',*/
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
  