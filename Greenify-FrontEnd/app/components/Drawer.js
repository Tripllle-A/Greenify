import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { createDrawerNavigator } from 'react-navigation'

import Intro from './Intro'
import Login from './Login'
import MyPlants from './MyPlants'
import PlantsDisplay from './PlantsDisplay'
import Profile from './Profile'


const MyDrawer=createDrawerNavigator(
  { MyPlants:{
      screen:MyPlants,
    },
    PlantsDisplay:{
     screen:PlantsDisplay,
    },
    Profile:{
     screen:Profile,
    },
      
    LogOut:{
      screen:Login,
    },
  },
  {                                 
    initialRouteName:'Intro',
    drawerPosition:'left',
    drawerWidth:200,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions:{
    activeTintColor:'green',
    },
  }
);

export default class Drawer extends React.Component{
  static router = MyDrawer.router;
  render() {
    return (
      <View style={styles.Page}>
        <MyDrawer navigation={this.props.navigation}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  Page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
});