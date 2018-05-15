import React from 'react';

import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Login from './Loggin';

export default class Signup extends React.Component {
    constructor(props){
    super(props);
    //all the data save before sent in state
    this.state={
      username:'',
      password: '',
      phonenumber:''
    };
  }

  render() {
    return (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>SignUp</Text>
          </TouchableOpacity>
    );
  }

  signup = () => {

    if(this.state.username.length && this.state.password.length && this.state.phonenumber.length  !==0){
      fetch("http://192.168.1.76:3000/users",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          phonenumber:this.state.phonenumber
        })
      }).then((responseData) => {
        if(responseData.status === 200){
          alert('Signedup Successfully');
          this.props.navigation.navigate('Login');
        }else{
          alert("exist")
        }
       
     })
    }else{
      alert('please fill all the information')
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
   
    justifyContent: 'center',
  },
   input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
   },
   text:{
    fontSize:50,
    textAlign:'center',
    paddingBottom:60,
   },
  button: {
    padding:20,
    borderWidth:1,
    backgroundColor:'green'
  }
});
