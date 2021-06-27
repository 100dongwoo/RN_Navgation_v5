import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabStackScreen from './MainTabStackScreen';
import CpuListScreen from '../Screens/CpuListScreen';
import ImageListScreen from '../Screens/ImageListScreen';
import AboutScreen from '../Screens/AboutScreen';

import {createStackNavigator} from '@react-navigation/stack';
const Drawer = createDrawerNavigator();

const ImageStack = createStackNavigator();
const ImageStackScreen = ({nav}) => {
  return (
    <ImageStack.Navigator>
      <ImageStack.Screen
        name="image"
        component={ImageListScreen}
        options={{}}
      />
    </ImageStack.Navigator>
  );
};
const AboutStack = createStackNavigator();
const AboutStackScreen = ({nav}) => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="about" component={AboutScreen} options={{}} />
    </AboutStack.Navigator>
  );
};
const DrawerStackScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainTabStackScreen} />
      <Drawer.Screen name="ImageListstack" component={ImageStackScreen} />
      <Drawer.Screen name="Aboutstack" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStackScreen;
