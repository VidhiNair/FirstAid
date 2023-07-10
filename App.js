import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
global.__reanimatedWorkletInit = () => {};

import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

import  DrawerNavigator from './navigator/DrawerNavigator'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <DrawerNavigator/>
    </NavigationContainer>
  );
}

