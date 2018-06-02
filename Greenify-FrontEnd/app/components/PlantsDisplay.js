import React, { Component } from 'react';

import { Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert, Image, TouchableOpacity} from 'react-native';

import { DB_URL } from 'react-native-dotenv'

export default class MyProject extends Component {
 
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,
      text: '',
    
    }

    this.arrayholder = [] ;
  }
 
  componentDidMount() {
 
    return fetch(DB_URL+ '/plants')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {

          // In this block you can do something with new state.
          this.arrayholder = responseJson ;

        });
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

  GetListViewItem (plant_name) {
    
   Alert.alert(plant_name);
  
  }
  
   SearchFilterFunction(text){
     
     const newData = this.arrayholder.filter(function(item){
         const itemData = item.name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         text: text
     })
 }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
      <View style={styles.MainContainer}>

      <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search Here"
        />
 
        <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => (<View  key={rowData.number} style={{ flexDirection: 'row', flex: 1,borderWidth:3,borderColor:'#97a884'}}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Plant',{plant:rowData})}>
              <Image source={{uri:rowData.imageUrl}} style={{width: 200, height: 200, borderRadius:35}}/>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.text}>{rowData.name}</Text>
            <Text style={styles.texto}>Origin: {rowData.origin}</Text>
            <Text style={styles.texto}>Max Growth: {rowData.growth}</Text>
          </View>
        </View>
        )}

          enableEmptySections={true}

          style={{marginTop: 10}}
 
        />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
 MainContainer :{

  justifyContent: 'center',
  flex:1,
  margin: 7,
  backgroundColor: '#cbeaa8',
 
  },

 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },

  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
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