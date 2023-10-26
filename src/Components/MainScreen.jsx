import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const MainScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Ionicons name="md-car-sport-sharp" size={150} color="white" />

      <View style={{ display: 'flex', gap: 20, width: '100%' }}>
        <Text style={styles.headerText}>Let's you in</Text>
        <View style={{ padding: 30, display: 'flex', gap: 10 }}>
          <TouchableOpacity style={styles.box}>
            <MaterialIcons name="facebook" size={24} color="#4299E1" />
            <Text style={{ width: '100%', marginTop: 2, color: '#4299E1' }}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="google" size={24} color="#E53E3E" />
            <Text style={{ width: '100%', marginTop: 2, color: '#E53E3E' }}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="apple1" size={24} color="black" />
            <Text style={{ width: '100%', marginTop: 2 }}>
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          gap: 20,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 10,
            gap: 10,
          }}
        >
          <View
            style={{
              width: 170,
              height: 1,
              backgroundColor: '#E2E8F0',
              marginTop: 10,
            }}
          ></View>
          <Text style={{ color: 'white' }}>or</Text>
          <View
            style={{
              width: 170,
              height: 1,
              backgroundColor: '#E2E8F0',
              marginTop: 10,
            }}
          ></View>
        </View>
        <View style={{ width: '100%', padding: 20 }}>
          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: '#E2E8F0',
              borderRadius: 30,
            }}
            onPress={() => handleLogin()}
          >
            <Text style={{ textAlign: 'center' }}>Sign in with password</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text style={{ marginTop: 5, width: '40%', color: 'white' }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={{ width: '20%' }}
            onPress={() => handleRegister()}
          >
            <Text
              style={{
                textDecorationLine: 'underline',
                color: 'gray',
                marginTop: 5,
                color: '#EDF2F7',
              }}
            >
              {' '}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#2D3748',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  box: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 30,
    marginLeft: '15%',
    gap: 10,
  },
});

export default MainScreen;
