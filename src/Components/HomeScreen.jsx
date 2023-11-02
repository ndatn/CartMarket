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
import colors from './config/colors';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { carSelector } from '../store/cars/selector';
import { getCarsAsyncThunk } from '../store/cars/thunk';
import useAccessToken from '../hooks/useAccessToken';
import jwt_decode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import MainScreen from './MainScreen';

const Tab = createMaterialBottomTabNavigator();

const { width } = Dimensions.get('window');

const gradient = [colors['dark-gray'], colors.gray];

const HomeScreen = () => {
  const cars = useSelector(carSelector);
  const dispatch = useDispatch();
  const navigator = useNavigation();
  // const userInfo = jwt_decode(accessToken)
  useEffect(() => {
    dispatch(getCarsAsyncThunk());
  }, []);

  const handleNavigateToDetailScreen = id => {
    navigator.navigate('CarDetail', {
      id,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: 20,
              marginTop: 50,
              backgroundColor: 'black',
            }}
            onPress={() => navigator.navigate('UserProfile')}
          />
          {/* <Text>{userInfo?.email}</Text> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        ></View>
        <View
          style={{
            position: 'relative',
            marginVertical: 10 * 3,
            marginTop: 20,
            marginBottom: 10,
            margin: '5%',
            height: 50,
            justifyContent: 'center',
          }}
        >
          <LinearGradient colors={gradient} style={{ borderRadius: 14 }}>
            <TextInput
              style={{
                padding: 10 * 1.5,
                borderRadius: 10 * 2,
                color: colors.light,
                fontSize: 10 * 1.5,
                paddingLeft: 10 * 4,
              }}
              placeholder="Search"
              placeholderTextColor={colors['light']}
            />
            <Ionicons
              style={{
                position: 'absolute',
                bottom: 10,
                left: 10,
              }}
              size={10 * 2.5}
              color={colors.light}
              name="search"
            />
          </LinearGradient>
        </View>

        <LinearGradient
          colors={gradient}
          style={{
            margin: '5%',
            padding: 10 * 3,
            height: 200,
            borderRadius: 10 * 3,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              maxWidth: '50%',
            }}
          >
            <Text
              style={{
                color: colors.light,
                fontSize: 10 * 3.5,
                fontWeight: '800',
                marginBottom: 10,
              }}
            >
              20%
            </Text>
            <Text
              style={{
                color: colors.light,
                fontWeight: '700',
                fontSize: 10 * 2,
                marginBottom: 10,
              }}
            >
              Week Deals
            </Text>
            <Text
              style={{
                color: colors.light,
              }}
            >
              Get a new car discount. only valid this week
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              position: 'relative',
            }}
          >
            <Image
              style={{
                width: '100%',
                height: 100,
              }}
              source={require('../../assets/cars/2.png')}
            />
          </View>
        </LinearGradient>
        <View
          style={{
            margin: '5%',
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: 10 * 2,
              fontWeight: '900',
            }}
          >
            <View>
              <Text style={{ color: 'black', fontSize: 20 }}>Deals</Text>
            </View>
          </Text>
          <View
            style={{
              marginTop: 10 * 3,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {cars?.map(car => (
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
                      <Ionicons
                        name="heart"
                        color={colors.light}
                        size={10 * 2}
                      />
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <Tab.Navigator
      activeColor="black"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'white', height: 40 }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
        name="Main"
        component={MainScreen}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});
