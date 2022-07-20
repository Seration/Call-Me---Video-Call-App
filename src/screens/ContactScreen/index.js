import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import dummyContacts from '../../../assets/data/contacts.json';
import {useNavigation} from '@react-navigation/native';
import {Voximplant} from 'react-native-voximplant';

const ContactScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  const navigation = useNavigation();
  const voximplant = Voximplant.getInstance();

  useEffect(() => {
    voximplant.on(Voximplant.ClientEvents.IncomingCall, incomingCallEvent => {
      navigation.navigate('IncomingCall', {call: incomingCallEvent.call});
    });

    return () => {
      voximplant.off(Voximplant.ClientEvents.IncomingCall);
    };
  }, []);

  useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setFilteredContacts(newContacts);
  }, [searchTerm]);

  const callUser = user => {
    navigation.navigate('Calling', {user});
  };

  return (
    <View style={styles.page}>
      <Text style={{color:'#00ADB5',fontSize:30, marginTop: 50, fontWeight:'bold', marginBottom:10}}>CONTACTS</Text>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
        placeholder="Search..."></TextInput>

      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <Pressable
            style={{
              height: 60,
              marginBottom: 10,
              borderBottomColor: '#393E46',
              borderBottomWidth: 0.5,
            }}
            onPress={() => callUser(item)}>
            <View style={{flexDirection: 'row', height: 60}}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginRight: 15,
                  //borderWidth:2,
                  //borderColor:'#00ADB5'
                }}
                source={{uri: 'https://thiscatdoesnotexist.com/'}}></Image>
              <View>
                <Text style={styles.contactName}>{item.user_display_name}</Text>
                <Text style={styles.status}>{item.status}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
    backgroundColor: '#222831',
  },
  contactName: {
    fontSize: 16,
    color: '#eee',
    letterSpacing: 1,
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    color: '#EEEEEE',
    letterSpacing: 1,
    marginTop: 5,

  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 25,
    color:'#222831'
    
  },
});

export default ContactScreen;
