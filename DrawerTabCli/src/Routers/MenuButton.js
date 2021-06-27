import React from 'react';

import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Platform} from 'react-native';
const MenuButton = () => {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View>
      <TouchableOpacity onPress={openMenu}>
        <Text style={styles.menuIcon}> ★ </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  menuIcon: {
    fontSize: 30,
    marginTop: 5,
  },
});
export default MenuButton;
