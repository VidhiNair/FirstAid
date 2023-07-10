import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView
} from 'react-native';

export default class CPRScreen extends Component {
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
            onPress={() => Linking.openURL('https://youtu.be/BQNNOh8c8ks')}>
            <Text style={styles.text}>Click for Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => Linking.openURL('https://youtu.be/Mlp5dRIJk4M')}>
            <Text style={styles.text}>Primary Survey</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Place the heel of your hand on the centre of the person's chest,
            then place the palm of your other hand on top and press down by 5 to
            6cm (2 to 2.5 inches) at a steady rate of 100 to 120 compressions a
            minute.
          </Text> <Text> </Text>
          <Text style={styles.text}>
            {' '}
            After every 30 chest compressions, give 2 rescue breaths.
          </Text><Text> </Text>
          <Text style={styles.text}>
            {' '}
            Tilt the person's head gently and lift the chin up with 2 fingers.
            Pinch the person's nose. Seal your mouth over their mouth and blow
            steadily and firmly into their mouth for about 1 second. Check that
            their chest rises. Give 2 rescue breaths.
          </Text><Text> </Text>
          <Text style={styles.text}>
            {' '}
            Continue with cycles of 30 chest compressions and 2 rescue breaths
            until they begin to recover or emergency help arrives.
          </Text><Text> </Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => Linking.openURL('https://youtu.be/fNFzfwLM72c')}>
            <Text style={styles.text}>Click for CPR Song </Text>
          </TouchableOpacity>
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
    padding:15,
    backgroundColor: '#A7B4AD',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 30,
    borderColor: 'black',
  },
});
