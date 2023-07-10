import React, {Component} from 'react';
import {StyleSheet, Image, SafeAreaView, View, Text, TouchableOpacity,Linking,ScrollView} from 'react-native';

export default class EmergenciesScreen extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
  <View style = {styles.container}>


      <ScrollView>
      <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/BQNNOh8c8ks") }>
       <Text style = {styles.text}>Chest Compressions</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/Mlp5dRIJk4M") }>
       <Text style = {styles.text}>Primary Survey</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/61urGQrmeNM") }>
       <Text style = {styles.text}>Shock</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/PhH9a0kIwmk") }>
       <Text style = {styles.text}>Stroke</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/r_qNTFa13uQ") }>
       <Text style = {styles.text}>Allergies</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/j45WfhxK_Hs") }>
       <Text style = {styles.text}>Chocking</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/CAcwoaylH9o") }>
       <Text style = {styles.text}>Asthma</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/7Fh3v5c6FY4") }>
       <Text style = {styles.text}>Bites + Stings</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/ZhO-c4z-lDM") }>
       <Text style = {styles.text}>Chest Pain</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/L06DNMRcy98") }>
       <Text style = {styles.text}>Diabetic Emergancy</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons} onPress={() => Linking.openURL("https://youtu.be/Ovsw7tdneqE") }>
       <Text style = {styles.text}>Seizure</Text>
       </TouchableOpacity>
       </ScrollView>
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
      color:'white'
    },
    buttons:{
      width: 180,
      length: 500,
      margin: 30,
      marginBottom: 20,
      justifyContent:'center',
      padding: 10,
      borderWidth:2,
      borderRadius:30,
      borderColor:'black',
      backgroundColor:'#5a6e6f',
    },

})