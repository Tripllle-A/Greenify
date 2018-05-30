//This component for signup process, it will send a post request for the back-end
//side, then after success it will navigate the user for the login page.


import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Image,KeyboardAvoidingView} from 'react-native';
import { DB_URL } from 'react-native-dotenv';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
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
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.container}>
       <Image source={{uri:'https://i.pinimg.com/originals/e8/88/d4/e888d4feff8fd5ff63a965471a94b874.gif'}} style={styles.container} />
        <View style={{marginTop:10,marginBottom:10,marginRight:25,marginLeft:25}}>
        <Sae
    label={'Username'}
    labelStyle={{
      fontFamily: 'notoserif',
      color:'#cbeaa8',
    }}
    iconClass={FontAwesomeIcon}
    iconName={'pagelines'}
    iconColor={'green'}
    inputStyle={{ color: '#91627b' }}
    onChangeText={(username) => this.setState({username})}
    value={this.state.username}
    autoCapitalize={'none'}
    autoCorrect={false}
    ref= {(el) => { this.username = el }}
  />
  <Sae
    label={'Password'}
    labelStyle={{
      fontFamily: 'notoserif',
      color:'#cbeaa8',
    }}
    iconClass={FontAwesomeIcon}
    iconName={'pagelines'}
    iconColor={'green'}
    inputStyle={{ color: '#91627b' }}
    onChangeText={(password) => this.setState({password})}
    autoCapitalize={'none'}
    autoCorrect={false}
    secureTextEntry={true}
    value={this.state.password}
    ref= {(el) => { this.password = el; }}
  />
  <Sae
    label={'PhoneNumber'}
    labelStyle={{
      fontFamily: 'notoserif',
      color:'#cbeaa8',
    }}
    iconClass={FontAwesomeIcon}
    iconName={'pagelines'}
    iconColor={'green'}
    inputStyle={{ color: '#91627b' }}
    onChangeText={(phonenumber) => this.setState({phonenumber})}
    autoCapitalize={'none'}
    autoCorrect={false}
    value={this.state.phonenumber}
  />
           <TouchableOpacity onPress={this.signup} style={styles.button}>
              <Text style={{textAlign:'center'}}>Sign up</Text>
           </TouchableOpacity>
          
           </View>
            <Text style={{textAlign:'center',marginBottom:10,marginTop:10}}>Already have account        .<Text style={{color:'blue'}} onPress={this.goToSignIn}>Sign In</Text></Text>
        </View>
        </KeyboardAvoidingView>
    );
  }

  signup = () => {

    if(this.state.username.length && this.state.password.length && this.state.phonenumber.length  !==0){
      console.log("aaaaaaaaaaaaaaa",DB_URL)
      fetch(DB_URL+"/users",{
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
      }).then((data) => {
        if(data.status===200){
         alert('Signedup Successfully');
         this.props.navigation.navigate('Login');
        }else{
          alert('username exist')
        }
      })
    }else{
      alert('please fill all the information')
    }
  }

  goToSignIn = () => {
    this.props.navigation.navigate('Login');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
   input: {
    borderRadius:10,
    margin: 15,
    height: 40,
    borderColor: '#cbeaa8',
    borderWidth: 1,
    
   },
   text:{
    fontSize:50,
    textAlign:'center',
    paddingBottom:60,
   },
  button: {
    padding:20,
    borderWidth:1,
    borderRadius:20,
    marginRight:30,
    marginLeft:30,
    backgroundColor:'#0bba22'
  }
});
