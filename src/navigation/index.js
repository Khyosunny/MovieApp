import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import MainPage from '../screens/MainPage'
import ListDetailPage from '../screens/ListDetailPage'
import DetailPage from '../screens/DetailPage'

import ListPage from '../screens/ListPage'
import SearchPage from '../screens/SearchPage'
import LikePage from '../screens/LikePage'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName
          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline'
            return <Icon name={iconName} size={size} color={color} />
          } else if (route.name === '영화') {
            iconName = focused ? 'movie-open' : 'movie-open-outline'
            return <MaterialIcon name={iconName} size={size} color={color} />
          } else if (route.name === '검색') {
            iconName = focused ? 'search' : 'search'
            return <Icon name={iconName} size={size} color={color} />
          } else {
            iconName = focused ? 'heart' : 'heart-outline'
          }
          return <MaterialIcon name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: '#898b9b',
        style: {
          backgroundColor: '#1e1f27',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen name="홈" component={MainPage} />
      <Tab.Screen name="영화" component={ListPage} />
      <Tab.Screen
        name="검색"
        component={SearchPage}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen name="좋아요" component={LikePage} />
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainPage" component={TabNavigator} />
      <Stack.Screen name="ListDetailPage" component={ListDetailPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  )
}
export default StackNavigator
