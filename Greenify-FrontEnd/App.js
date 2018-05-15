import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Loggin';
import Profile from './app/components/Profile';
import Signup from './app/components/Signup';

const Application = StackNavigator({
  Home: { screen: Login },
  Profile: { screen: Profile},
  Signup: { screen: Signup},

  }, {
    navigationOptions: {
      header: false,
    }
});

export default class App extends React.Component {
  render() {
    return (
        <Application />
      );
  }
}
