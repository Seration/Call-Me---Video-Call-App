import React from 'react';
import {FlatList, StyleSheet, View, Text, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Someone</Text>
        <Text style={styles.phoneNumber}>Ringing +90 552 612 50 23</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.iconButton}>
          <Ionicons name="ios-camera-reverse" size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <MaterialIcons name="camera-off" size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <MaterialIcons name="microphone-off" size={30} color={'white'} />
        </View>

        <View style={[styles.iconButton, {backgroundColor:'red'}]}>
          <MaterialIcons name="phone-hangup" size={30} color={'white'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7b4280',
  },
  cameraPreview: {
    backgroundColor: '#7b4280',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 50,
  },
  phoneNumber: {
    fontSize: 20,
    color: '#fff',
  },
  buttonsContainer: {
    backgroundColor: '#333',
    padding: 20,
    paddingBottom:40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});

export default CallingScreen;
