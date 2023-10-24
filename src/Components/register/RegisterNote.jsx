import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const RegisterNote = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>lưu ý: </Text>
      <Text style={{ marginTop: 5, fontWeight: '400', fontSize: 14 }}>
        Họ tên phải là tên trên các giấy tờ tuỳ thân như CMND/CCCD/Hộ chiếu
      </Text>
      <Text style={{ marginTop: 5, fontWeight: '400', fontSize: 14 }}>
        Mật khẩu phải có độ dài ít nhất 6 ký tự, bao gồm ít nhất:
      </Text>
      <View style={{ marginTop: 5, marginLeft: 8 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Entypo name="dot-single" size={20} color="black" />
          <Text style={{ width: '100%', fontSize: 13, fontWeight: '500' }}>
            1 ký tự hoa
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Entypo name="dot-single" size={20} color="black" />
          <Text style={{ width: '100%', fontSize: 13, fontWeight: '500' }}>
            1 ký tự số
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  textStyle: {
    color: 'red',
  },
});

export default RegisterNote;
