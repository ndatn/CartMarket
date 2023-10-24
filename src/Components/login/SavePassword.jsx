import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SavePassword = () => {
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
        <Text style={styles.checkBoxText}>Bạn có muốn lưu mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    fontSize: 14,
    marginLeft: -15,
  },
});

export default SavePassword;
