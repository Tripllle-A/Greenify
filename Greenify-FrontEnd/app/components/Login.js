import React from 'react';

import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Image,KeyboardAvoidingView,AsyncStorage} from 'react-native';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    //all the data save before sent in state
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null){
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper} enabled>
        <View style={styles.container}>
          <Text style={styles.header}>
          - Login -
          </Text>
          <TextInput
            style={styles.textInput} placeholder='username'
            onChangeText={(username) => this.setState({username})}
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={styles.textInput} placeholder='password'
            onChangeText={(password) => this.setState({password})}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={this.login}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text>SignUp</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput} placeholder='password'
            onChangeText={(password) => this.setState({password})}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />
        </View>
      </KeyboardAvoidingView>
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
          password: this.state.password,
        })
      })
      // .then((response) => response.json())
      // .then((res) => {
      //   if (res.success === true){
      //     AsyncStorage.setItem('user', res.user);
      //     this.props.navigation.navigate('Home');
      //   } else {
      //     alert(res.message)
      //   }
      // })
      .then((responseData) => {
        console.log(responseData)
        if(responseData.status === 200){
          alert('Signedin Successfully-1')
          //AsyncStorage.setItem('user', res.user);
          this.props.navigation.navigate('Profile');
        }else{
          alert("wrong password")
        }
      })
    }else{
      alert('please fill all the information')
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight :40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },
  btn2: {
  alignSelf: 'stretch',
  backgroundColor: 'green',
  padding: 20,
  alignItems: 'center',
},
})
