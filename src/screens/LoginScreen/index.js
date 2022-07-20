import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import {Voximplant} from 'react-native-voximplant';
import {APP_NAME, ACC_NAME} from '../../Constants';

const LoginScreen = () => {
  const [username, setUsername] = useState('user1');
  const [password, setPassword] = useState('User23!!');

  const voximplant = Voximplant.getInstance();
  const navigation = useNavigation();

  useEffect(() => {
    const connect = async () => {
      const status = await voximplant.getClientState();
      if (status === Voximplant.ClientState.DISCONNECTED) {
        await voximplant.connect();
      } else if (status === Voximplant.ClientState.LOGGED_IN) {
        redirectHome();
      }
    };

    connect();
  }, []);

  const signIn = async () => {
    try {
      const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
      const login = await voximplant.login(fqUsername, password);
    alert(login);

      redirectHome();
    } catch (e) {
      console.log(e);
      Alert.alert(e.name, `Error code: ${e.code}`);
    }
  };

  const redirectHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Contacts',
        },
      ],
    });
  };

  return (
    <View style={styles.page}>
      <Text
        style={{
          color: '#00ADB5',
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 80,
        }}>
        CALL ME
      </Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"></TextInput>

      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder="Password"></TextInput>

      <Pressable style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
  input: {
    backgroundColor: 'white',
    padding: 14,
    marginVertical: 10,
    height: 50,
    borderRadius: 13,
  },
  button: {
    backgroundColor: '#191a1c',
    padding: 10,
    marginVertical: 10,
    borderRadius: 13,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default LoginScreen;
