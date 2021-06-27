import React from 'react';
import {Text, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import MainTabStackScreen from './MainTabStackScreen';
import CpuListScreen from '../Screens/CpuListScreen';
import ImageListScreen from '../Screens/ImageListScreen';
import AboutScreen from '../Screens/AboutScreen';

import {createStackNavigator} from '@react-navigation/stack';
import MenuButton from './MenuButton';

const Drawer = createDrawerNavigator();

const ImageStack = createStackNavigator();
const ImageStackScreen = ({nav}) => {
  return (
    <ImageStack.Navigator>
      <ImageStack.Screen
        name="image"
        component={ImageListScreen}
        options={{headerLeft: () => <MenuButton />}}
      />
    </ImageStack.Navigator>
  );
};
const AboutStack = createStackNavigator();
const AboutStackScreen = ({nav}) => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="about"
        component={AboutScreen}
        options={{headerLeft: () => <MenuButton />}}
      />
    </AboutStack.Navigator>
  );
};
const DrawerStackScreen = () => {
  const CustomDrawer = ({navigation}) => {
    const goToScreen = (screenName, params) => {
      navigation.navigate(screenName, params);
    };
    return (
      <DrawerContentScrollView>
        <DrawerItem
          label="CPU"
          onPress={() =>
            goToScreen('maintab', {
              screen: 'cpustack',
              params: {
                screen: 'cpulist',
              },
            })
          }
        />
        <DrawerItem
          label="보드"
          onPress={() =>
            goToScreen('maintab', {
              screen: 'boardstack',
              params: {
                screen: 'boardlist',
              },
            })
          }
        />
        <DrawerItem
          label="메모리"
          onPress={() =>
            goToScreen('maintab', {
              screen: 'memorystack',
              params: {
                screen: 'memorylist',
              },
            })
          }
        />
        <DrawerItem
          label="에누리"
          onPress={() =>
            goToScreen('maintab', {
              screen: 'storestack',
              params: {
                screen: 'storetab',
                params: {
                  screen: 'storeA',
                },
              },
            })
          }
        />
        <DrawerItem
          label="다나와"
          onPress={() =>
            goToScreen('maintab', {
              screen: 'storestack',
              params: {
                screen: 'storetab',
                params: {
                  screen: 'storeB',
                },
              },
            })
          }
        />
        <DrawerItem label="사진" onPress={() => goToScreen('ImageListstack')} />
        <DrawerItem
          label="이 앱에 대하여"
          onPress={() => goToScreen('Aboutstack')}
        />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => (
        <CustomDrawer navigation={navigation} />
      )}>
      <Drawer.Screen name="maintab" component={MainTabStackScreen} />
      <Drawer.Screen name="ImageListstack" component={ImageStackScreen} />
      <Drawer.Screen name="Aboutstack" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerStackScreen;
