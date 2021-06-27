import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const StoreTab = createMaterialTopTabNavigator();
import {Text, View} from 'react-native';
import StoreAScreen from '../Screens/store/StoreAScreen';
import StoreBScreen from '../Screens/store/StoreBScreen';

const StoreTabStackScreen = () => {
  return (
    <StoreTab.Navigator>
      <StoreTab.Screen
        name="storeA"
        component={StoreAScreen}
        options={{title: '에누리'}}
      />
      <StoreTab.Screen
        name="storeB"
        component={StoreBScreen}
        options={{title: '다나와'}}
      />
    </StoreTab.Navigator>
  );
};

export default StoreTabStackScreen;
