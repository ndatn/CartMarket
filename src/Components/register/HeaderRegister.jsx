import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const HeaderRegister = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <AntDesign name="left" size={16} />
      </TouchableOpacity>
      <Text style={{ width: '20%' }}>Đăng ký</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
});

export default HeaderRegister;
