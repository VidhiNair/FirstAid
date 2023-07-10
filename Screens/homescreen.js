import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headlineFont}> First Aid Assistant </Text>
        </View>

        <Text> </Text>
        <View style={styles.optionContainer}>
          <ScrollView>
            <Text> </Text>
            <Text style={styles.text}>
              Danger - Is there anything that could harm you?
            </Text>
            <Text> </Text>
            <Text style={styles.text}>
              Response - Shout at the casualty. Do you respond? Press down on
              their collarbone. Do they respond to pain?
            </Text>
            <Text> </Text>
            <Text style={styles.text}>
              Airways - Tilt the chin up and open their mouth. Is anything
              blocking their airway?
            </Text>
            <Text> </Text>
            <Text style={styles.text}>
              Breathing - Put your ear over their mouth and nose. Are they
              breathing?
            </Text>
            <Text> </Text>
            <Text style={styles.text}>Circulation - Are they bleeding?</Text>
            <Text> </Text>
            <Text style={styles.text}>
              {' '}
              If they are breathing, put them in recovery position and tend to
              any injuries, there are instructions under the subheadings above{' '}
            </Text>
            <Text> </Text>
            <Text style={styles.text}>
              If they are not breathing, call 999 and starts CPR. There are
              instructions above.
            </Text>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => Linking.openURL('https://youtu.be/GmqXqwSV3bo')}>
                <Text style={[styles.text, { textAlign: 'center' }]}>
                  Click for Recovery Position
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    flex: 0.1,
    backgroundColor: '#A7B4AD',
    margin: 10,
    paddingTop: 20,
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 4,
  },
  headlineFont: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'fantasy',
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D5B5A6',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 4,
    padding:15,
  },
  text: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'cursive',
  },
  buttons: {
    width: 175,
    height: 50,
    margin: 30,
    marginBottom: 20,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: '#5A6E6F',
  },
  optionContainer: {
    flex: 0.75,
    backgroundColor: '#A7B4AD',
    alignItems: 'left',
    borderWidth: 4,
    borderRadius: 30,
    borderColor: 'black',
    padding: 10,
  },
});
