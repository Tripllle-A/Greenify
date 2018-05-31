//This component contain the plant that the user joined it, it will make a post request 
//for the back-end after the user click on the fork button,and after success it will be 
//forked and saved in the user plants

import React from 'react';
import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';
import { DB_URL } from 'react-native-dotenv'
export default class PlantList extends React.Component {
    constructor(){
    super();
  }

 fork = () => {


      fetch(DB_URL + "/forkOne",{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.props.navigation.getParam('plant'))
      }).then((data) => {
        if(data.status===200){
         alert('forked Successfully');
         this.props.navigation.navigate('PlantsDisplay');
        }else{
          alert('plant exist')
        }
      })
  }

render() {
 const plant = this.props.navigation.getParam('plant');
  return (
    <View style={styles.container}>
     <Text style={styles.text}> {plant.name}</Text>
      <Image source={{uri:plant.imageUrl}} style={{width: 175, height: 200,margin:25}} borderRadius={10} />
      <View style={styles.border}><Text style={{margin:20,color:'#7ead9b',fontSize:14}}>{plant.description}</Text></View>
      <TouchableOpacity
        style={styles.button}
        onPress = {this.fork}
        >
        
        <Text>Fork It</Text>
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
    margin:15,
    fontWeight:'bold',
    color:'#7ead9b'
   },
   button: {
    padding:20,
    borderWidth:1,
    borderRadius:20,
    marginRight:70,
    marginLeft:70,
    backgroundColor:'#7ead9b',
  },
  border: {
    margin:15,
    borderWidth:1,
    borderRadius:15,
     borderColor: '#7ead9b'
  }
});