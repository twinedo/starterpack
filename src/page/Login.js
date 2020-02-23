/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Platform,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Login: () => React$Node = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
        <View
          style={{width: 314, marginHorizontal: 47, height: 59, marginTop: 43}}>
          <Text
            style={{
              fontSize: 48,
              fontFamily: 'Montserrat',
              fontWeight: '500',
              color: '#19B2FF',
            }}>
            Welcome!
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 132,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 180,
          }}>
          <Image
            style={{width: 176, height: 120}}
            source={require('./src/assets/Logo.png')}
          />
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontWeight: '600',
              color: '#19B2FF',
              fontSize: 14,
            }}>
            Your trucking companion
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={{marginHorizontal: 47, marginTop: 148}}>
          <TextInput
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: '#80B7B7B7',
              backgroundColor: 'white',
              padding: 10,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            placeholder="Email Address or Phone Number"
          />
          <TextInput
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: '#80B7B7B7',
              backgroundColor: 'white',
              padding: 10,
              borderBottomLeftRadius: 2,
              borderBottomRightRadius: 2,
              marginTop: 4,
              marginBottom: 4,
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
        </KeyboardAvoidingView>
        <View>
          <View style={{marginHorizontal: 47}}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#19B2FF',
                textAlign: 'right',
                marginBottom: 24,
              }}>
              Forgot your password?
            </Text>

            <TouchableNativeFeedback
              style={[styles.button]}
              background={TouchableNativeFeedback.SelectableBackground()}
              onPress={() => Alert.alert('Klik')}>
              <View
                style={{
                  width: '100%',
                  height: 50,
                  backgroundColor: '#19B2FF',
                  alignItems: 'center',
                  borderRadius: 5,
                  elevation: 10,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '600',
                    fontFamily: 'Montserrat',
                  }}>
                  Sign in
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </>
  );
};

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  generalText: {
    fontFamily: 'Montserrat',
    color: '#19B2FF',
  },
  button: {
    borderRadius: 20,
    height: 50,
    backgroundColor: '#19B2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Login;
