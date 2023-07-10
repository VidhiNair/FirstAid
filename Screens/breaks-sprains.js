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

export default class StrainsSprainsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.optionContainer}>
        <ScrollView>
          <Text style={styles.text}>Keep Calm!</Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => Linking.openURL('https://youtu.be/V8KiNURVjgk')}>
            <Text style={styles.text}>Click for Video</Text>
          </TouchableOpacity>
          <Text style={styles.text}> Use the Rice Technique...</Text>
          <Text> </Text>
          <Text style={styles.text}>
            {' '}
            R - Rest the injured part. Help them to sit or lie down and support
            the injured part in a comfortable position, raised if possible.
          </Text>
          <Text> </Text>
          <Text style={styles.text}>
            {' '}
            I - Apply an Ice pack or cold compress. Try and cool the area by
            putting an ice pack, or a bag of frozen vegetables wrapped in a tea
            towel against the injury. This can help to reduce the swelling, pain
            and bruising. This should be left on for a maximum of 20 minutes.
          </Text>
          <Text> </Text>
          <Text style={styles.text}>
            {' '}
            C - Provide Comfortable support. Use blankets, cusions, jackets and
            soft padding to support the injury.
          </Text>
          <Text> </Text>
          <Text style={styles.text}>
            {' '}
            E - Elevate the injured part. Support the injury in an elevated
            position to help minimise swelling and bruising. You could do this
            by placing pillows underneath the injured part.
          </Text>
          <Text> </Text>
          </ScrollView>
        </View>
      </View>
    );
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
    padding: 15,
  },
  text: {
    textAlign: 'center',
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
    backgroundColor: '#D5B5A6',
  },
  optionContainer: {
    flex: 0.75,
    padding: 15,
    backgroundColor: '#A7B4AD',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 30,
    borderColor: 'black',
  },
});
