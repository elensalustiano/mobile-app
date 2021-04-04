import React, { ReactElement } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Colors } from '../constants/Styles'
import { BottomTabParamList, TabTwoParamList } from '../types/navigation'

import TabTwoScreen from '../screens/TabTwoScreen'
import ReminderTabNavigator from './ReminderTabNavigator'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator(): ReactElement {
  return (
    <BottomTab.Navigator
      initialRouteName="Reminder"
      tabBarOptions={{ activeTintColor: Colors.activeColor }}>
      <BottomTab.Screen
        name="Reminder"
        component={ReminderTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  )
}
