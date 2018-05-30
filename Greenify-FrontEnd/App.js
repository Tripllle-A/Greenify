//This component is the main component it will controll all the subcomponents to be rendered 
//for the user using react-navigation.

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Intro from "./app/components/Intro";
import Login from "./app/components/Login";
import Signup from "./app/components/Signup";
import Profile from "./app/components/Profile";
import PlantsDisplay from "./app/components/PlantsDisplay";
import Plant from "./app/components/Plant";
import MyPlants from "./app/components/MyPlants";
import PlantProgress from "./app/components/PlantProgress";
import Drawer from "./app/components/Drawer";

//testing
const Application = createStackNavigator({
  Drawer: Drawer,
  Home: Drawer,
  Login: Login,
  Signup: Signup,
  Profile: Profile,
  PlantsDisplay: PlantsDisplay,
  Plant: Plant,
  MyPlants: MyPlants,
  PlantProgress: PlantProgress
  },{
    initialRouteName: "Home",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
        <Application />
      );
  }
}
