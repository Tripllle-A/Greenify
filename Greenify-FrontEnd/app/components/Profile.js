//This component for viewing the profile page and here after login the Notification will
//be started to be arrived for the user in specific time using expo scheduleNotification

import React from "react";
import { Notifications, Permissions, Constants } from 'expo';
import moment from 'moment';
import { StyleSheet, Text, View ,TouchableOpacity,ImageBackground} from "react-native";

export default class ProfileIntro extends React.Component {
    constructor(){
    super();
    //all the data save before sent in state
  }


    componentDidMount = () => {
      const localNotification = {
       
       title: 'النباتات',
       sound:true,
       body: 'اسقي النباتات بعرضك',
       data: { type: 'delayed' }
     }
     var d= new Date();
     var times = d.setHours(21,47, 0);
     const schedulingOptions = {
       time: times
     }

     console.log('Scheduling delayed notification:', { localNotification, schedulingOptions })

     Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
       .then(id => console.info(`Delayed notification scheduled (${id}) at ${moment(schedulingOptions.time).format()}`))
       .catch(err => console.error(err))
    }


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.container} 
      onPress={() => this.props.navigation.navigate("MyPlants")}>
             <ImageBackground
        style={{
          backgroundColor: "#ccc",
          flex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
        source={{ uri: "http://www.limerickgardentrail.com/wp-content/uploads/plants-for-home-dont-have-much-space-to-grow-your-plants-at-home-meshpedia.jpg" }}
      >
      </ImageBackground>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <TouchableOpacity style={styles.container}
      onPress={() => this.props.navigation.navigate("PlantsDisplay")} >
             <ImageBackground
        style={{
          backgroundColor: "#ccc",
          flex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
        source={{ uri: "https://simplytreesfl.com/wp-content/uploads/2018/01/simply-trees-llc-hand-photo-webop.png" }}
      >
      </ImageBackground>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
   container1: {
    flex: 1,
    backgroundColor: "#d3ffce",
    alignItems: "center",
    justifyContent: "center",
  },
   container2: {
    flex: 1,
    backgroundColor: "#b3ffe1",
    alignItems: "center",
    justifyContent: "center",
  },
   input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
   },
   text:{
    fontSize:50,
    textAlign:"center",
    paddingBottom:60,
   },
  button: {
    padding:20,
    marginBottom:10,
    borderWidth:1,
    backgroundColor:"#b3ffe1"
  }
});
