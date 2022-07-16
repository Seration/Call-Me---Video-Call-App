import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import ContactScreen from './src/screens/ContactScreen/index.js';
import CallingScreen from './src/screens/CallingScreen/index.js';
import IncomingCallScreen from './src/screens/IncomingCallScreen/index.js';

const App = () => {

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
     
     {/* <ContactScreen/> */}
      {/* <CallingScreen/> */}
      <IncomingCallScreen></IncomingCallScreen>
     
    </>
  );
};



export default App;
