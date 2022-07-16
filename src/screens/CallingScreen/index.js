import React from 'react'
import {FlatList, StyleSheet, View, Text, TextInput} from 'react-native';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Someone</Text>
        <Text style={styles.phoneNumber}>Ringing +90 552 612 50 23</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        height: '100%',
        backgroundColor: 'red',
    },
    cameraPreview: {
        backgroundColor: '#7b4280',
        flex:1,
        alignItems: 'center',
        padding: 10,
    },
    name: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop:50
    },
    phoneNumber: {
        fontSize: 20,
        color: '#fff',
    }
});

export default CallingScreen