import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './app/components/Loggin';
import Profile from './app/components/Profile';
import Signup from './app/components/Signup';
//testing
const Application = createStackNavigator({
  Home: Login,
  Profile: Profile,
  Signup: Signup,

  },{
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return (
        <Application />
      );
  }
}

