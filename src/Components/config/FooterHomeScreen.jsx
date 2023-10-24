import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import icons from '../data/icons';
import colors from './colors';

const FooterHomeScreen = () => {
  const { width } = Dimensions.get('window');
  const gradient = [colors['dark-gray'], colors.gray];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {icons.map(icon => (
          <LinearGradient
            key={icon.id}
            colors={gradient}
            style={{
              height: 50,
              width: width / 6 - 5,
              borderRadius: 15,
              marginBottom: 5,
              padding: 3,
            }}
          ></LinearGradient>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '1%',
    marginVertical: 0,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default FooterHomeScreen;
