import React from 'react';
import { CheckBox, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image,KeyboardAvoidingView,AsyncStorage} from 'react-native';
import { DB_URL } from 'react-native-dotenv';
import { Notifications, Permissions, Constants } from 'expo';
import moment from 'moment';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

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
     fetch(DB_URL + "/logout")
    .then((response) =>{
      this.props.navigation.navigate('Login')
      const localNotification = {
       
       title: 'النباتات',
       sound:true,
       body: 'اسقي النباتات بعرضك',
       data: { type: 'delayed' }
     }
     var d= new Date();
     var times = d.setHours(17,50, 0);
     const schedulingOptions = {
       time: times
     }

     console.log('Scheduling delayed notification:', { localNotification, schedulingOptions })

     Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
       .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions.time).format()}`))
       .catch(err => console.error(err))
    })
  }



  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
        <View style={styles.container}>
          <Image source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-914819026-1518897132.jpg?resize=768:*'}} style={{width:400,height:300}} borderRadius={80}/>
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
    autoCapitalize={'none'}
    autoCorrect={false}
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
    ref={input => { this.textInput = input }}
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
          //this.textInput.clear()
        }else{
          alert("wrong password")
           this.textInput.clear()
        }
      })
    }else{
      alert('please fill all the information')
    }
  }
   goToSignUp = () => {
    this.props.navigation.navigate('Signup');
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
