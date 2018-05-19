import React from 'react';

import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';
export default class PlantList extends React.Component {
    constructor(){
    super();
   
    this.state={
      plants: []
    };
  }


render() {
  const plant = this.props.navigation.getParam('plant');
  return (
    <View style={styles.container}>
      <Text> {plant.name}</Text>
      <Text> {plant.imageUrl}</Text>
      <TouchableOpacity
        style={styles.button}
        >
        
        <Text>Fork</Text>
      </TouchableOpacity>
    </View>
    )
  }
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