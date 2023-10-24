import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderLogin from './login/HeaderLogin';
import SavePassword from './login/SavePassword';

const Login = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (number === '123' && password === '123') {
      navigation.navigate('HomeScreen');
    } else {
      console.log('Invalid login credentials');
    }
  };

  return (
    <View>
      <HeaderLogin />
      <View style={styles.container}>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <Text>Số điện thoại</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
          <TextInput
            placeholder="Nhập số điện thoại"
            value={number}
            onChangeText={setNumber}
            style={styles.textInput}
          />
        </View>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <Text>Mật khẩu</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Nhập mật khẩu"
              style={styles.textInput}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={{ position: 'absolute', right: 10, marginTop: 10 }}
              onPress={togglePasswordVisibility}
            >
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <SavePassword />
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'gray',
            margin: '2.5%',
            padding: 14,
            borderRadius: 7,
            width: '94%',
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#EDF2F7',
    height: 50,
    borderStyle: 'solid',
    fontStyle: 'italic',
    flexGrow: 1,
    position: 'relative',
  },
});

export default Login;
