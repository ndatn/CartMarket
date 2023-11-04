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

const gradient = [colors['dark-gray'], colors.gray];
const Deals = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              marginTop: 30,
              color: 'black',
              fontSize: 30,
              margin: '5%',
              marginVertical: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            Deals
          </Text>
        </View>

        <View>
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
                source={require('../../assets/cars/6.png')}
              />
            </View>
          </LinearGradient>
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
                10%
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
                source={require('../../assets/cars/7.png')}
              />
            </View>
          </LinearGradient>
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
                15%
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
                30%
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
                source={require('../../assets/cars/8.png')}
              />
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Deals;
