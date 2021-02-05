import React, { ReactElement } from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import { ReminderParamList } from '../types/navigation'
import { RootStackParamList } from '../types/navigation'

import ReminderScreen from '../screens/reminder'
import AddButton from '../components/header-button'

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Root'
>

type Props = {
  navigation: ScreenNavigationProp
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<ReminderParamList>()

export default function ReminderTabNavigator({ navigation }: Props): ReactElement {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="ReminderScreen"
        component={ReminderScreen}
        options={{
          headerTitle: '',
          headerRight: () => (
            <AddButton onPress={() => navigation.push('SaveReminder')} />
          )
        }}
      />
    </TabOneStack.Navigator>
  )
}