import React from 'react';

import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';

export default class PlantProgress extends React.Component {
    constructor(){
    super();
  }


render() {
 const plant = this.props.navigation.getParam('plant');
  return (
    <View style={styles.container}>
      <Image source={{uri:plant.imageUrl}} style={{width: 175, height: 200,margin:25}} borderRadius={20}/>
      
      <Text style={styles.text}>{plant.name}</Text>
      <View style={{borderWidth:1,borderRadius:5,margin:10}}>
      <Text style={{margin:15,fontSize:16,textAlign:'center',fontFamily:'notoserif'}}> {plant.description}</Text>
      </View>
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
    backgroundColor:'green'
  }
});