import React from 'react';

import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';

export default class App extends React.Component {
    constructor(){
    super();
    //all the data save before sent in state
    this.state={
      username:'',
      password: '',
      phonenumber:''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Registration</Text>

        <Image source={{uri: 'https://www.bbb.org/ProfileImages/0fc6a242-18d1-4868-8e91-abaf39dac8ac.png'}} style={{width: 400, height: 125}} />

        <TextInput
      ref= {(el) => { this.username = el; }}
      onChangeText={(username) => this.setState({username})}
      value={this.state.username} underlineColorAndroid = "transparent"
                 placeholder = "username"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 style={styles.input}
      />
      <TextInput
      ref= {(el) => { this.password = el; }}
      onChangeText={(password) => this.setState({password})}
      value={this.state.password} underlineColorAndroid = "transparent"
                 placeholder = "Password"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 style={styles.input}
      />
      <TextInput
      ref= {(el) => { this.phonenumber = el; }}
      onChangeText={(phonenumber) => this.setState({phonenumber})}
      value={this.state.phonenumber} underlineColorAndroid = "transparent"
                 placeholder = "phonenumber"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 style={styles.input}
      />
           <TouchableOpacity onPress={this.login} style={styles.button}>
              <Text>Sign up</Text>
           </TouchableOpacity>
        </View>

    );
  }

  login = () => {

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
      })

        
          .then((responseData) => {
             alert('Signedup Successfully')
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
