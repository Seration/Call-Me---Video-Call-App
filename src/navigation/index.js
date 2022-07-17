import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactScreen from '../screens/ContactScreen/index.js';
import CallingScreen from '../screens/CallingScreen/index.js';
import IncomingCallScreen from '../screens/IncomingCallScreen/index.js';
import CallScreen from '../screens/CallScreen/index.js';
import LoginScreen from '../screens/LoginScreen/index.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Contacts" component={ContactScreen} />

        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Calling" component={CallingScreen} />
          <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
          <Stack.Screen name="Call" component={CallScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
