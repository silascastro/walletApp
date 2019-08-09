import React, {Component} from 'react';
import {TouchableOpacity ,StyleSheet,Button, Text ,View, TextInput, Picker, DatePickerAndroid, ActivityIndicator, Modal} from 'react-native';
import {TextInputMask } from 'react-native-masked-text';
import {dataStorage} from '../storage/dataStorage';
import AsyncStorage  from '@react-native-community/async-storage';

const DATA_BASE = 'atividade';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        weekDayArray = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];
        monthArray = ['Jan','Feb','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dec'];
        this.state = {
            valor: '0',
            description: '',
            type: '1',
            year: new Date().getFullYear().toString(),month: new Date().getMonth().toString(), day: new Date().getDate().toString(), weekDay: new Date().getDay().toString(),
            loading: false,
        }
    }

    SaveOnStorage(data){
      AsyncStorage.getItem(DATA_BASE).then(resp => {
        if(resp){
          array = JSON.parse(resp);
          array.push(data);
          AsyncStorage.setItem(DATA_BASE,JSON.stringify(array));
        }else{
          array = [];
          array.push(data);
          AsyncStorage.setItem(DATA_BASE,JSON.stringify(array));
        }
      }).catch(err => {
        console.log("erro: ",err);
      });
      
    }

    componentDidMount(){
      //console.log(this.state.year+''+this.state.day+''+this.state.month);
    }

    getWeekDay(day){
      return weekDayArray[day];
    }

    getMonth(month){
      return monthArray[month];
    }

    async showCalendar(){
      try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
          date: new Date(this.state.year, this.state.month, this.state.day)
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          // Selected year, month (0-11), day
          console.log(new Date().getDay().toString());
          this.setState({year : year, month: month, day: day, weekDay: new Date(year,month,day).getDay().toString()});
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
    }

    getFullDate(){
      return this.getWeekDay(this.state.weekDay)+', '+this.state.day+" "+this.getMonth(this.state.month)+" "+this.state.year;
    }

    static navigationOptions = ({navigation}) => {
      return{
        title: 'Nova Despesa'
      }
    }


    render() {
      return (
        this.state.loading ?
        <Modal visible={true} animationType={'slide'}>
            <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
              <Text>Carregando</Text>
              <ActivityIndicator size="large"/>
            </View>  
          </Modal>:
          
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
            style={styles.picker}
            mode='dropdown'
            onValueChange={(itemValue, itemIndex) =>
              this.setState({type: itemValue})
            }>
            <Picker.Item label="Receita 💵" value="1"/>
            <Picker.Item label="Despesa 💹"  value="0"/>
          </Picker>
          <TouchableOpacity style={styles.touchDate} onPress={async() =>this.showCalendar()}>
            <Text style={styles.date}>{this.getFullDate()}</Text>
          </TouchableOpacity>
          
          <View style={styles.buttonview}>
            <Button style={styles.button} title="OK" color="green" onPress={() => {
              this.setState({loading: true});
              setTimeout(() => {
                data = {description: this.state.description, valor: this.state.valor,type:this.state.type, year: this.state.year, month: this.state.month, day: this.state.day};
                this.SaveOnStorage(data);
                this.props.navigation.goBack();
                this.setState({loading: false});
              },1000);
            }}/> 
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
        padding: 10
    },
    value: {
      marginRight: 10,
      marginLeft: 10,
      alignSelf: "stretch"
    },
    description: {
      marginRight: 10,
      marginLeft: 10,
      alignSelf: "stretch"
    },
    type: {
      marginRight: 10,
      marginLeft: 10,
      alignSelf: "stretch"
    },
    touchDate: {
      height: 50,
      alignSelf: "flex-start"
    },
    date: {
      marginRight: 10,
      marginLeft: 10,
      fontSize: 25,
      
      //fontWeight: "800"
    },
    buttonview: {
      marginRight: 10,
      marginLeft: 10,
      alignSelf: "stretch"
    },
    picker: {
      height: 50, 
      marginRight: 10,
      marginLeft: 10,
      alignSelf: "stretch"
    },
    button:{
      borderRadius: 50,
    },

});