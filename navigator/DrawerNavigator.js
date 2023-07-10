import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/homescreen';
import BleedingScreen from '../Screens/bleeding';
import StrainsSprainsScreen from '../Screens/breaks-sprains';
import BurnScreen from '../Screens/burns'
import CPRScreen from '../Screens/cpr';
import EmerganciesScreen from '../Screens/emergancies'
const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
render(){
  return (
<Drawer.Navigator 
      screenOptions={{
    drawerStyle: {
      backgroundColor:'#5A6E6F',
      textAlign: 'center',
      fontWeight:'bold',
      fontSize:17,
      borderWidth:4,
      borderRadius:30,
      borderColor:'black',
      marginBottom:10
    },
    headerStyle:{
      backgroundColor:'#5A6E6F',
      borderWidth:4,
      borderColor:'black',
      marginBottom:10,
    },
    labelStyle:{
      fontFamily:'cursive',
      color:'white'
    },
    }}>
        <Drawer.Screen  name="Home" component={HomeScreen}/>
        <Drawer.Screen  name="Bleeding" component={BleedingScreen} />
        <Drawer.Screen  name="Strains and Sprains" component={StrainsSprainsScreen} />
        <Drawer.Screen  name="Burns" component={BurnScreen} />
        <Drawer.Screen  name="CPR" component={CPRScreen} />
        <Drawer.Screen  name="Emergancies" component={EmerganciesScreen} />
      </Drawer.Navigator>
  )
}}