import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import contacts from '../../../assets/data/contacts.json';

const ContactScreen = () => {
  return (
    <View style={styles.page}>
        <TextInput placeholder="Search..."></TextInput>
      <FlatList
        data={contacts}
        renderItem={({item}) => <Text>{item.user_display_name}</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default ContactScreen;
