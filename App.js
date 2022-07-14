import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Details from './components/Details';
import Like from './components/Like';
import Profile from './components/Profile';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 

MaterialCommunityIcons.loadFont();
Entypo.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return(
    <Tab.Navigator
    screenOptions={{
        tabBarStyle:styles.tabBar,
        tabBarActiveTintColor:colors.orange,
        tabBarInactiveTintColor:colors.gray,
        headerShown:false,
        tabBarShowLabel:false
      }}
    >
      <Tab.Screen name='Home' component={Home} 
        options={{
          tabBarIcon:({color})=><Entypo name='home' size={32} color={color}/>
        }}
        />
      <Tab.Screen name='Like' component={Like}
        options={{
          tabBarIcon:({color})=><Entypo name='heart' size={32} color={color}/>
        }}
      />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon:({color})=><MaterialCommunityIcons name='account' size={32} color={color}/>
        }}
      />
    </Tab.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor:colors.white,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  }
})