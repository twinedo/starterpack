/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Image} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Splashscreen: () => React$Node = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F3F3F3',
        }}>
        <Image source={require('./src/assets/Logo.png')} />
      </View>
    </>
  );
};

export default Splashscreen;
