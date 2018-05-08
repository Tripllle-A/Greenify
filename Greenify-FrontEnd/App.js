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

    fetch("http://192.168.1.76:3000/users").then(res => {
       alert(res);  
   });
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
