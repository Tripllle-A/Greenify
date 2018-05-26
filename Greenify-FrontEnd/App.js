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

//testing
const Application = createStackNavigator({
  Home: Intro,
  Login: Login,
  Signup: Signup,
  Profile: Profile,
  PlantsDisplay: PlantsDisplay,
  Plant: Plant,
  MyPlants: MyPlants,
  PlantProgress: PlantProgress
  },{
    initialRouteName: "Home",
  }
);

export default class App extends React.Component {
  render() {
    return (
        <Application />
      );
  }
}
