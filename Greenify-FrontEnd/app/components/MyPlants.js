import React from 'react';

import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';
import { DB_URL } from 'react-native-dotenv'
export default class MyPlants extends React.Component {
    constructor(){
    super();
   
    this.state={
      plants: []
    };
  }



componentDidMount = () => {
   fetch(DB_URL + "/viewProfile")
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(22,responseJson)
      this.setState({
        plants:responseJson.plants
      });
    })
    .catch((error) => {
      console.error(error);
    }); 
}


render() {
  return (
    <View style={styles.container}>
   <ScrollView>
    <View style={styles.container}>
      {this.state.plants.map((plant) => (
      <View key={plant.number}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('PlantProgress',{plant:plant})}>
      <Image source={{uri:plant.imageUrl}} style={{width: 400, height: 450}}/></TouchableOpacity>
      <Text>{plant.name}</Text>
      </View>
      ))}
    </View>
    </ScrollView>
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