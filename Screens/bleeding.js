import React, {Component} from 'react';
import {StyleSheet,ScrollView, Image, SafeAreaView, View, Text, TouchableOpacity,Linking} from 'react-native';

export default class BleedingScreen extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
  <View style = {styles.container}>

      <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/V8KiNURVjgk") }>
       <Text style = {styles.text}>Click for Video</Text>
       </TouchableOpacity>

       <View style={styles.optionContainer}>
       <ScrollView>
       <Text style={styles.text}>If someone is bleeding, you must act fast. Loosing too much blood can cause the casualty to become unresponsive and possibly develop shock. Shock is a life-threatening condition caused by blood loss. HOw to treat shock can be found under the emergencies button on the home screen.</Text>
       <Text style = {styles.text}>ALWAYS REMEMBER: YOUR PRIORITY IS KEEPING THE PATIENT ALIVE AND STOPPING BLOOD LOSS WHILE WAITING FOR HELP.</Text>
       </ScrollView>
       </View>
       
       <View style={styles.optionContainer}>
       <ScrollView>
       <Text style = {styles.text}> Step 1 : Call for Help.</Text>
      <Text style = {styles.text}> Step 2 : If possible, wear disposible gloves.</Text>
      <Text style = {styles.text}> Step 3 : Use gauze to apply pressure to the wound. Secure the gauze at a suitable pressure with a bandage.</Text>
      <Text style = {styles.text}> NOTE: Be careful, there may be something in the wound. In this case, cover the wound with a bandage and use a tourniquet above the wound.</Text> 
      </ScrollView>
      </View>
      </View>


    )
  }
}

const styles = StyleSheet.create({
      container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D5B5A6',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 4,
        padding:15,
  },
    text:{
      textAlign: 'center',
      fontWeight:'bold',
      fontSize:17,
      fontFamily:'cursive',
    },
    buttons:{
      width: 175,
      backgroundColor:'#62868D',
      height: 50,
      margin: 30,
      marginBottom: 20,
      justifyContent:'center',
      borderWidth:2,
      borderRadius:30,
      borderColor:'black',
    },
        optionContainer:{
      flex:0.75,
      backgroundColor:'#A7B4AD',
      alignItems:'center',
      borderWidth:4,
      borderRadius:30,
      marginTop:15,
      padding:5,
      justifyContent:'center',
      borderColor:'black',
    },
})