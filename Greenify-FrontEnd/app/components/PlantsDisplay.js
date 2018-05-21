import React from 'react';

import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';

export default class PlantList extends React.Component {
    constructor(){
    super();
   
    this.state={
      plants: []
    };
  }



  componentDidMount = () => {
    console.log(process.env.DB_URL)
   fetch('http://192.168.1.109:3000/plants')
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

render() {
  return (

  <View style={styles.container}>
    <ScrollView>
      <View style={styles.container}>
        {this.state.plants.map((plant) => (
        <View  key={plant.number} style={{ flexDirection: 'row', flex: 1,borderWidth:3,borderColor:'#97a884'}}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Plant',{plant:plant})}>
              <Image source={{uri:plant.imageUrl}} style={{width: 200, height: 200, borderRadius:35}}/>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.text}>{plant.name}</Text>
            <Text style={styles.texto}>Type: QWEQWE</Text>
            <Text style={styles.texto}>Color: SDFGFHVB</Text>
            <Text style={styles.texto}>Time: CVDFDSDS</Text>
          </View>
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
    backgroundColor: '#cbeaa8',

  },
   input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
   },
   text:{
    fontSize:15,
    marginLeft:60,
    marginBottom:30,
    marginTop:10
   },
    texto:{
    marginLeft:50,
    marginBottom:10
   },
  button: {
    padding:20,
    borderWidth:1,
    backgroundColor:'green'
  }
});