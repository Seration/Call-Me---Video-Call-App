import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Text, TextInput} from 'react-native';
import dummyContacts from '../../../assets/data/contacts.json';

const ContactScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  useEffect(() => {
    const result = dummyContacts.filter(x =>
      x.user_display_name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(result);
  }, [searchTerm]);

  return (
    <View style={styles.page}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
        placeholder="Search..."></TextInput>

      <FlatList
        data={filteredContacts}
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
  searchInput: {},
});

export default ContactScreen;
