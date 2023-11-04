import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import colors from './config/colors';
import { Ionicons } from '@expo/vector-icons';
import cars from './data/cars';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');
import { carSelector } from '../store/cars/selector';
import { getCarsAsyncThunk } from '../store/cars/thunk';

const gradient = [colors['dark-gray'], colors.gray];
const HomeList = () => {
  const navigation = useNavigation();
  const cars = useSelector(carSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsAsyncThunk());
  }, []);
  const handleNavigateToDetailScreen = id => {
    navigation.navigate('CarDetail', {
      id,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 30,
            margin: '5%',
            marginVertical: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'black', fontSize: 30 }}>All</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            margin: '5%',
            marginVertical: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {cars.map(car => (
            <TouchableOpacity
              key={car.id}
              onPress={handleNavigateToDetailScreen.bind(this, car?.id)}
            >
              <LinearGradient
                colors={gradient}
                style={{
                  height: 230,
                  width: width / 2 - 10 * 3,
                  borderRadius: 10 * 2,
                  marginBottom: 10 * 2,
                  padding: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Ionicons
                      name="star"
                      color={colors.yellow}
                      size={10 * 1.6}
                    />
                    <Text
                      style={{
                        color: colors.light,
                        marginLeft: 10 / 2,
                      }}
                    >
                      {car.rating}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Ionicons name="heart" color={colors.light} size={10 * 2} />
                  </TouchableOpacity>
                </View>
                <Image
                  style={{
                    width: '100%',
                    height: 100,
                  }}
                  source={{
                    uri: car.image,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 10 * 1.8,
                    color: colors.light,
                  }}
                >
                  {car.name}
                </Text>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      color: colors.light,
                      fontSize: 10 * 1.5,
                    }}
                  >
                    $ {car.price}
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeList;
