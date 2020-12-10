import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../screens/MainPage';
import DetailPage from '../screens/DetailPage';

import ListPage from '../screens/ListPage';
import SearchPage from '../screens/SearchPage';
import LikePage from '../screens/LikePage';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='MainPage' component={MainPage} />
      <Stack.Screen name='DetailPage' component={DetailPage} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='홈' component={StackNavigator}/>
      <Tab.Screen name='리스트' component={ListPage}/>
      <Tab.Screen name='검색' component={SearchPage}/>
      <Tab.Screen name='좋아요' component={LikePage}/>
    </Tab.Navigator>
  )
}

export default TabNavigator;