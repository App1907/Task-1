/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import Home from './Home';
import Details from './Details';
import Graphene from './Graphene';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Graphene: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Details'>
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: "Product Details",
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Trending Products",
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Graphene'
          component={Graphene}
          options={{
            title: " Graphene Xtreme",
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;