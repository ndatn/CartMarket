import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../Components/MainScreen';
import Login from '../Components/Login';
import Register from '../Components/Register';
import HomeScreen from '../Components/HomeScreen';
import UserProfile from '../Components/userProfile/UserProfile';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CarDetail from '../Components/CarDetail';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="CarDetail" component={CarDetail} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="UserProfile"  component={UserProfile}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigator;
