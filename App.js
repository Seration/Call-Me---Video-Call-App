import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ContactScreen from './src/screens/ContactScreen/index.js';
import CallingScreen from './src/screens/CallingScreen/index.js';
import IncomingCallScreen from './src/screens/IncomingCallScreen/index.js';
import CallScreen from './src/screens/CallScreen/index.js';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/index.js';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation />
    </>
  );
};

export default App;
