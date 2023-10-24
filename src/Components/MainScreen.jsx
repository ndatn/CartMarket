import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const MainScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#4FD1C5',
          padding: 14,
          borderRadius: 40,
          width: '50%',
        }}
      >
        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
          Đăng nhập
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleRegister}
        style={{
          backgroundColor: '#4FD1C5',
          padding: 14,
          borderRadius: 40,
          width: '50%',
        }}
      >
        <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}>
          Đăng ký
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
