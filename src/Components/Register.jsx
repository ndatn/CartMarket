import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AcceptPolicy from './register/AcceptPolicy';
import { Ionicons } from '@expo/vector-icons';
import RegisterNote from './register/RegisterNote';
import Header from './register/HeaderRegister';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <Text>Họ và tên</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
          <View>
            <TextInput placeholder="Nhập họ và tên" style={styles.textInput} />
          </View>
        </View>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <Text>Số điện thoại</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>
          <TextInput
            placeholder="Nhập số điện thoại"
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
              placeholder="Nhập mật khẩu"
              style={styles.textInput}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={{ position: 'absolute', right: 10, marginTop: 10 }}
              onPress={togglePasswordVisibility}
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <Text>Xác nhận mật khẩu</Text>
            <Text style={{ color: 'red' }}>*</Text>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              placeholder="Xác nhận mật khẩu"
              style={styles.textInput}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={{ position: 'absolute', right: 10, marginTop: 10 }}
              onPress={togglePasswordVisibility}
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <RegisterNote />
      <AcceptPolicy />
      <View style={{ paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'gray',
            padding: 14,
            margin: '2.5%',
            borderRadius: 7,
            width: '94%',
          }}
        >
          <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
            Đăng ký tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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

export default Register;
