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
  }
});