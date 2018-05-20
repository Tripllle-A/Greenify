import React from 'react';

import {ScrollView, StyleSheet, Text, View ,TouchableOpacity,TextInput,Image} from 'react-native';

export default class PlantList extends React.Component {
    constructor(){
    super();
   

  }



 fork = () => {

   
      fetch(process.env.DB_URL+"/forkOne",{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.props.navigation.getParam('plant'))
      }).then((data) => {
        if(data.status===200){
         alert('Signedup Successfully');
         this.props.navigation.navigate('Login');
        }else{
          alert('username exist')
        }
      })
  }
//   .then(function(data) {
//     console.log(data)
//     this.setState({
//       plants:data
//     })
//   })
//   }

render() {
 const plant = this.props.navigation.getParam('plant');
  return (
    <View style={styles.container}>
      <Text> {plant.name}</Text>
      <Image source={{uri:plant.imageUrl}} style={{width: 400, height: 450}}/>
      <TouchableOpacity
        style={styles.button}
        onPress = {this.fork}
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