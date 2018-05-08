import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity onPress={this.login} style={styles.button}>
            <Text>Click Here</Text>
         </TouchableOpacity>
      </View>
    );
  }

  login = () => {

    fetch('http://10.0.2.2:3000/users',{
      method:"POST",
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
  
    })
    .then((response) => response.json())
    .then((res) => {
      console.log("hello");
    })
    .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding:20,
    borderWidth:1,
  }
});
