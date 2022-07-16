import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ContactScreen from '../screens/ContactScreen/index.js';
import CallingScreen from '../screens/CallingScreen/index.js';
import IncomingCallScreen from '../screens/IncomingCallScreen/index.js';
import CallScreen from '../screens/CallScreen/index.js';

const Navigation = () => {
  return (
    <NavigationContainer>
      <CallScreen></CallScreen>
    </NavigationContainer>
  );
};

export default Navigation;
