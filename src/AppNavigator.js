import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Main from './screens/Main';
import ItemsByCategory from './screens/ItemsByCategory';
import SettingPage from './tabs/SettingPage';

const Stack = createStackNavigator();



const AppNavigator = () => {
  return (
<NavigationContainer>
<Stack.Navigator >
    <Stack.Screen options={{headerShown:false}} name='Splash' component={Splash} />
    <Stack.Screen options={{headerShown:false}} name='Main' component={Main} />
    <Stack.Screen name='ItemsByCategory' component={ItemsByCategory} />
    <Stack.Screen  options={{headerShown:false}}  name='SettingPage' component={SettingPage} />
</Stack.Navigator>
    
</NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})