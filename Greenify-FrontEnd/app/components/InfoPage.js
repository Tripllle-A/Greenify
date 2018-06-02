//This component for view the user's plant, it will make a get request for the back-end side
//then after success it will put the plants in the plants array that is the state.After it
//they will be rendered.


import React from 'react';
import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';
import { DB_URL } from 'react-native-dotenv'
export default class MyPlants extends React.Component {
    constructor(){
    super();
   
    this.state={
      info: []
    };
  }
  

  componentDidMount = () => {
 
    console.log("aaaaaaaaaaaaaaa",DB_URL)
     fetch(DB_URL + "/infoPage")
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(22,responseJson)
        this.setState({
          info:responseJson

        })
      })
      .catch((error) => {
        console.error(error);
      }); 
         
  }


logout = () => {
  fetch(DB_URL + "/logout")
  .then((response) =>{
    this.props.navigation.navigate('Login')
  })
}

render() {
  return (
    <View style={styles.container}>
   <ScrollView>
    <View style={styles.container}>
      <View style={{justifyContent:'center',alignItems: "center",marginTop:20}}>
      <Text style={styles.text}>Thank you for uisng GreeifyApp{"\n"}-<Text style={styles.text}>{this.state.info.username}</Text>-</Text>
      <Text style={styles.text}>GoodBye</Text>

      </View>

      <Image source={{uri:'https://s22.postimg.cc/aoeyd1x6p/9de350d9-46a0-4e29-8751-1a6a842fbe42.png'}} style={{width:300,height:300,marginTop:40}} borderRadius={80}/>
      <Text style={styles.text}>At your service</Text>
    </View>
    </ScrollView>
    <TouchableOpacity style={styles.button} onPress={this.logout}>
    <Text>Logout</Text>
    </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#deede7',
    alignItems: "center",
    justifyContent: 'center',

  },
   input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
   },
   text:{
    fontSize:20,
    textAlign:'center',
    margin:20,
    fontWeight:'bold',
    color:'#7ead9b'
   },
  button: {
    padding:20,
    borderWidth:1,
    borderRadius:20,
    marginRight:70,
    marginLeft:70,
    marginBottom:20,
    backgroundColor:'#7ead9b',
  }
});