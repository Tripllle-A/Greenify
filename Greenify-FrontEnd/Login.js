import React from 'react';

import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';

export default class App extends React.Component {
    constructor(){
    super();
    //all the data save before sent in state
    this.state={
      username:'',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>LOGIN</Text>

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
                 secureTextEntry = {true}
                 placeholder = "Password"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 style={styles.input}
      />
           <TouchableOpacity onPress={this.login} style={styles.button}>
              <Text>Sign in</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.check} style={styles.button}>
              <Text>check</Text>
           </TouchableOpacity>
        </View>

    );
  }

  login = () => {

    if(this.state.username.length && this.state.password.length !==0){
      fetch("http://192.168.1.109:3000/login",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then((responseData) => {
        if(responseData.status === 200){
          alert('Signedin Successfully')
        }else{
          alert("wrong password")
        }
       
     })
    }else{
      alert('please fill all the information')
    }
  }

  //   check = () => {

   
  //     fetch("http://192.168.1.109:3000/check")
  //     .then((responseData) => {
  //       alert('created session')
  // })
  //   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
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
