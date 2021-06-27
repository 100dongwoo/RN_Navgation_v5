import React from 'react';

import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StoreTabStackScreen from './StoreTabStackScreen';
import {createStackNavigator} from '@react-navigation/stack';
import CpuListScreen from '../Screens/CpuListScreen';
import DetailScreen from '../Screens/DetailScreen';
import BoardListScreen from '../Screens/BoardListScreen';
import MemoryListScreen from '../Screens/MemoryListScreen';
import MenuButton from './MenuButton';
const MainTab = createBottomTabNavigator();

const CpuStack = createStackNavigator();
const CpuStackScreen = ({navigation}) => {
  return (
    <CpuStack.Navigator>
      <CpuStack.Screen
        name="cpulist"
        component={CpuListScreen}
        options={{
          title: 'CPU 리스트',
          headerLeft: () => <MenuButton />,
        }}
      />
    </CpuStack.Navigator>
  );
};

const BoardStack = createStackNavigator();
const BoardStackScreen = ({navigation}) => {
  return (
    <BoardStack.Navigator>
      <BoardStack.Screen
        name="boardlist"
        component={BoardListScreen}
        options={{headerLeft: () => <MenuButton />}}
      />
    </BoardStack.Navigator>
  );
};

const MemoryStack = createStackNavigator();
const MemoryStackScreen = ({navigation}) => {
  return (
    <MemoryStack.Navigator>
      <MemoryStack.Screen
        name="memorylist"
        component={MemoryListScreen}
        options={{headerLeft: () => <MenuButton />}}
      />
    </MemoryStack.Navigator>
  );
};

const StoreStack = createStackNavigator();
const StoreStackScreen = ({navigation}) => {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="storetab"
        component={StoreTabStackScreen}
        options={{
          title: '온라인 쇼핑몰',
          headerLeft: () => <MenuButton />,
        }}
      />
    </StoreStack.Navigator>
  );
};

const MainTabStackScreen = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="cpustack" component={CpuStackScreen} />
      <MainTab.Screen name="boardstack" component={BoardStackScreen} />
      <MainTab.Screen name="memorystack" component={MemoryStackScreen} />
      <MainTab.Screen
        name="storestack"
        component={StoreStackScreen}
        options={{
          title: '쇼핑몰',
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabStackScreen;
