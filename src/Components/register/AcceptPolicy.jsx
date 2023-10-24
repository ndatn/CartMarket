import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const AcceptPolicy = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkBoxContainer}
        onPress={() => setIsChecked(!isChecked)}
      >
        <CheckBox
          checked={isChecked}
          checkedColor="gray"
          uncheckedColor="#A0A0A0"
          onPress={() => setIsChecked(!isChecked)}
        />
        <Text style={styles.checkBoxText}>
          Tôi đã đọc và đồng ý với{' '}
          <Text style={styles.linkText}>Điều khoản sử dụng</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    fontSize: 14,
    marginLeft: -15,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AcceptPolicy;
