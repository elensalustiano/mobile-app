import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ReminderParamList } from '../types/navigation'
import ReminderScreen from '../screens/reminder'
import AddButton from '../components/header-button'

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<ReminderParamList>()

export default function ReminderTabNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="ReminderScreen"
        component={ReminderScreen}
        options={{
          headerTitle: '',
          headerRight: () => (
            <AddButton onPress={() => console.log('add button')} />
          ),
        }}
      />
    </TabOneStack.Navigator>
  )
}