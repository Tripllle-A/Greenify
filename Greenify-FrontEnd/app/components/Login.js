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
      fetch("http://192.168.1.95:3000/login",{
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

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>LOGIN</Text>

//         <Image source={{uri: 'https://www.bbb.org/ProfileImages/0fc6a242-18d1-4868-8e91-abaf39dac8ac.png'}} style={{width: 400, height: 125}} />

//         <TextInput
//       ref= {(el) => { this.username = el; }}
//       onChangeText={(username) => this.setState({username})}
//       value={this.state.username} underlineColorAndroid = "transparent"
//                  placeholder = "username"
//                  placeholderTextColor = "#9a73ef"
//                  autoCapitalize = "none"
//                  style={styles.input}
//       />
//       <TextInput
//       ref= {(el) => { this.password = el; }}
//       onChangeText={(password) => this.setState({password})}
//       value={this.state.password} underlineColorAndroid = "transparent"
//                  secureTextEntry = {true}
//                  placeholder = "Password"
//                  placeholderTextColor = "#9a73ef"
//                  autoCapitalize = "none"
//                  style={styles.input}
//       />
//            <TouchableOpacity onPress={this.login} style={styles.button}>
//               <Text>Sign in</Text>
//            </TouchableOpacity>
//            <TouchableOpacity onPress={this.check} style={styles.button}>
//               <Text>check</Text>
//            </TouchableOpacity>
//         </View>

//     );
//   }

//   login = () => {

//     if(this.state.username.length && this.state.password.length !==0){
//       fetch("http://192.168.1.109:3000/login",{
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           username: this.state.username,
//           password: this.state.password
//         })
//       }).then((responseData) => {
//         if(responseData.status === 200){
//           alert('Signedin Successfully')
//         }else{
//           alert("wrong password")
//         }

//      })
//     }else{
//       alert('please fill all the information')
//     }
//   }

//   //   check = () => {


//   //     fetch("http://192.168.1.109:3000/check")
//   //     .then((responseData) => {
//   //       alert('created session')
//   // })
//   //   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',

//     justifyContent: 'center',
//   },
//    input: {
//     margin: 15,
//     height: 40,
//     borderColor: '#7a42f4',
//     borderWidth: 1
//    },
//    text:{
//     fontSize:50,
//     textAlign:'center',
//     paddingBottom:60,
//    },
//   button: {
//     padding:20,
//     borderWidth:1,
//     backgroundColor:'green'
//   }
// });
