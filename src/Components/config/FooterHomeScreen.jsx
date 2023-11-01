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
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from '../HomeScreen';
const FooterHomeScreen = () => {
  const { width } = Dimensions.get('window');
  const gradient = [colors['dark-gray'], colors.gray];
  const navigator = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LinearGradient
          colors={gradient}
          style={{
            margin: 5,
            marginLeft: 30,
            height: 50,
            width: width / 6 - 4,
            borderRadius: 15,
            marginBottom: 5,
            padding: 5,
          }}
        >
          <TouchableOpacity onPress={() => navigator.navigate('HomeScreen')}>
            <Ionicons
              name="home"
              size={40}
              color="#D3D3D3"
              style={{
                marginLeft: 6,
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={gradient}
          style={{
            margin: 5,
            height: 50,
            width: width / 6 - 4,
            borderRadius: 15,
            marginBottom: 5,
            padding: 5,
          }}
        >
          <TouchableOpacity>
            <Ionicons
              name="book"
              size={40}
              color="#D3D3D3"
              style={{
                marginLeft: 6,
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={gradient}
          style={{
            margin: 5,
            height: 50,
            width: width / 6 - 4,
            borderRadius: 15,
            marginBottom: 5,
            padding: 5,
          }}
        >
          <TouchableOpacity>
            <Ionicons
              name="heart"
              size={40}
              color="#D3D3D3"
              style={{
                marginLeft: 6,
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={gradient}
          style={{
            margin: 5,
            marginRight: 30,
            height: 50,
            width: width / 6 - 4,
            borderRadius: 15,
            marginBottom: 5,
            padding: 5,
          }}
        >
          <TouchableOpacity>
            <Ionicons
              name="close"
              size={40}
              color="#D3D3D3"
              style={{
                marginLeft: 6,
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    marginVertical: 0,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default FooterHomeScreen;
