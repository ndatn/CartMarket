import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AcceptPolicy from './register/AcceptPolicy';
import { Ionicons } from '@expo/vector-icons';
import Header from './register/HeaderRegister';
import { useDispatch, useSelector } from 'react-redux';
import { isSuccessSelector } from '../store/auths/selector';
import { useNavigation } from '@react-navigation/native';
import { resetIsSuccessStateAction } from '../store/auths/action';
import { registerAsyncThunk } from '../store/auths/thunk';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isSuccess = useSelector(isSuccessSelector);
  console.log(isSuccess);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    dispatch(
      registerAsyncThunk({
        firstName,
        lastName,
        email,
        age,
        password,
      })
    );
  };

  useEffect(() => {
    if (isSuccess === true) {
      alert('register successfully');
    } else if (isSuccess === false) {
      alert('login failed');
    }
  }, [isSuccess]);

  // useEffect(() => {
  //   if (isSuccess === true) {
  //     navigation.goBack()
  //   }
  //   return () => {
  //     if (isSuccess === true) {
  //       dispatch(resetIsSuccessStateAction())
  //     }
  //   }
  // }, [isSuccess, navigation])

  return (
    <View style={{ height: '100%' }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
              <Text>Firstname</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>
            <View>
              <TextInput
                placeholder="Nhập firstname"
                style={styles.textInput}
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
          </View>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
              <Text>Lastname</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>
            <View>
              <TextInput
                placeholder="Nhập lastname"
                style={styles.textInput}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
              <Text>Email</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>
            <View>
              <TextInput
                placeholder="Nhập email"
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
              <Text>Age</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>
            <TextInput
              placeholder="Nhập Age"
              style={styles.textInput}
              value={age}
              onChangeText={setAge}
            />
          </View>
          <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
              <Text>Password</Text>
              <Text style={{ color: 'red' }}>*</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <TextInput
                placeholder="Nhập mật khẩu"
                style={styles.textInput}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
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
              <Text>Xác nhận password</Text>
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
        {/* <RegisterNote /> */}
        <AcceptPolicy />
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity
            onPress={handleRegister}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
