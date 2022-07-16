import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import bg from '../../../assets/images/ios_bg.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const IncomingCallScreen = () => {
  const onDecline = () => {
    console.warn('Declined');
  };

  const onAccept = () => {
    console.warn('Accepted');
  };

  return (
    <View style={styles.root}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
        <Text style={styles.name}>Someone</Text>
        <Text style={styles.phoneNumber}>Video call...</Text>

        <View style={[styles.row, {marginTop: 'auto', marginBottom: 30}]}>
          <Pressable onPress={onDecline} style={styles.iconContainer}>
            <View style={styles.iconButtonContainer}>
              <Feather name="x" size={50} color="#fff" />
            </View>
            <Text style={styles.iconText}>Decline</Text>
          </Pressable>

          <Pressable onPress={onAccept} style={styles.iconContainer}>
            <View
              style={[
                styles.iconButtonContainer,
                {backgroundColor: 'lightgreen'},
              ]}>
              <Feather name="check" size={50} color="#fff" />
            </View>
            <Text style={styles.iconText}>Accept</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 100,
  },
  phoneNumber: {
    fontSize: 20,
    color: '#fff',
  },
  bg: {
    backgroundColor: '#7b4280',
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconText: {
    color: '#fff',
    marginTop: 10,
  },
  iconButtonContainer: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
});

export default IncomingCallScreen;
