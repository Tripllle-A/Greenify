import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Image,KeyboardAvoidingView,AsyncStorage} from 'react-native';
import { DB_URL } from 'react-native-dotenv'
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
   goToSignUp = () => {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
        <View style={styles.container}>
          <Image source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-914819026-1518897132.jpg?resize=768:*'}} style={{width:400,height:300}} borderRadius={80}/>
          <Text style={{textAlign:'center'}}>Username</Text>
          <TextInput
            style={styles.input} placeholder='username'
            onChangeText={(username) => this.setState({username})}
            underlineColorAndroid='transparent'
          />
          <Text style={{textAlign:'center'}}>Password</Text>
          <TextInput
            style={styles.input} placeholder='password'
            onChangeText={(password) => this.setState({password})}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.login}>
            <Text style={{textAlign:'center'}}>Login</Text>
          </TouchableOpacity>
           <Text style={{textAlign:'center',marginBottom:10,marginTop:10}}>Dont have account?        .<Text style={{color:'blue'}} onPress={this.goToSignUp}>Sign Up</Text></Text>
        </View>
      </KeyboardAvoidingView>
      );
  }
  login = () => {
    if(this.state.username.length && this.state.password.length !==0){
      console.log("aaaaaaaaaaaaaaa",DB_URL)
      fetch(DB_URL + "/login",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      }).then((responseData) => {
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
    marginRight:90,
    marginLeft:90,
    backgroundColor:'#0bba22',
  }
});
