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

export default class BurnsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.optionContainer13}>
            <Text style={styles.text}>
              Keep Calm! Call 111 for advice immediatley.
            </Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => Linking.openURL('https://youtu.be/TLr2qsEhpC8')}>
              <Text style={styles.text}>Click for Video</Text>
            </TouchableOpacity>
          </View>
          <Text> </Text>
          <View style={styles.optionContainer}>
            <ScrollView>
              <Text style={styles.text}>
                {' '}
                Stop the burning process as soon as possible. This may mean
                removing the person from the area, dousing flames with water, or
                smothering flames with a blanket. Do not put yourself at risk of
                getting burnt as well.
              </Text><Text> </Text>
              <Text style={styles.text}>
                Remove any clothing or jewellery near the burnt area of skin,
                including babies' nappies. But do not try to remove anything
                that's stuck to the burnt skin, as this could cause more damage.
              </Text><Text> </Text>
              <Text style={styles.text}>
                Cool the burn with cool or lukewarm running water for 20 minutes
                as soon as possible after the injury. Never use ice, iced water,
                or any creams or greasy substances like butter.
              </Text><Text> </Text>
              <Text style={styles.text}>
                Keep yourself or the person warm. Use a blanket or layers of
                clothing, but avoid putting them on the injured area. Keeping
                warm will prevent hypothermia, where a person's body temperature
                drops below 35C (95F). This is a risk if you're cooling a large
                burnt area, particularly in young children and elderly people.
              </Text><Text> </Text>
              <Text style={styles.text}>
                Cover the burn with cling film. Lay the cling film over the
                burn, rather than wrapping it around a limb. A clean, clear
                plastic bag can be used for burns on your hand.
              </Text><Text> </Text>
              <Text style={styles.text}>
                Treat the pain from a burn with paracetamol or ibuprofen. Always
                check the manufacturer's instructions when using
                over-the-counter medication. Children under 16 years of age
                should not be given aspirin.
              </Text><Text> </Text>
              <Text style={styles.text}>
                Raise the affected area, if possible. This will help to reduce
                swelling.
              </Text><Text> </Text>
            </ScrollView>
          </View>
        </ScrollView>
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
  optionContainer13: {

    width: 290,
    height:200,
    padding:10,
    backgroundColor: '#A7B4AD',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 30,
    borderColor: 'black',
  },
  optionContainer: {
    flex: 0.75,
    width: 290,
    padding:10,
    backgroundColor: '#A7B4AD',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 30,
    borderColor: 'black',
  },
});
