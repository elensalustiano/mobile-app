import React, { ReactElement } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from '../types/navigation'
import { Colors } from '../constants/Styles'

import BottomTabNavigator from './BottomTabNavigator'
import SaveReminder from '../screens/save-reminder'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

export default function Navigation(): ReactElement {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ header: () => null }} />
        <Stack.Screen name="SaveReminder" component={SaveReminder}
          options={{
            headerTitle: '',
            headerTintColor: Colors.primaryColor
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}