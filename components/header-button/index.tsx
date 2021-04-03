import React, { ReactElement } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import { Colors, FontSize } from '../../constants/Styles'

type AddButtonProps = {
  onPress: () => void
}

export default function AddButton({ onPress }: AddButtonProps): ReactElement {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10
  },
  text: {
    color: Colors.primaryColor,
    fontSize: FontSize.extraLarge
  }
})