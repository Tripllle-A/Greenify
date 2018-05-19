import React from 'react';

import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';
export default class PlantList extends React.Component {
    constructor(){
    super();
   
    this.state={
      plants: []
    };
  }



  plantsRetrieve = () => {
   fetch('http://192.168.1.157:3000/plants')
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson)
      this.setState({
        plants:responseJson
      });
    })
    .catch((error) => {
      console.error(error);
    }); 
}
//   .then(function(data) {
//     console.log(data)
//     this.setState({
//       plants:data
//     })
//   })
//   }

render() {

  return (

    <View style={styles.container}>
    <TouchableOpacity onPress={this.plantsRetrieve} style={styles.button}>
    <Text>Click me</Text>
    </TouchableOpacity>
   <ScrollView>
    <View style={styles.container}>
      {this.state.plants.map((plant) => (
      <View key={plant.number}><TouchableOpacity onPress={() => this.props.navigation.navigate('Plant',{plant:plant})}><Image source={{uri:plant.imageUrl}} style={{width: 400, height: 450}}/></TouchableOpacity>
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