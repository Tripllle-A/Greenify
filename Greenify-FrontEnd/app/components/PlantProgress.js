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
      <Text> {plant.name}</Text>
      <Image source={{uri:plant.imageUrl}} style={{width: 400, height: 450}}/>
      <Text> {plant.description}</Text>
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