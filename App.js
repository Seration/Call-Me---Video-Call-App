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

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
     
     <ContactScreen/>
     
    </SafeAreaView>
  );
};



export default App;
