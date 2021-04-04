import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Colors, FontSize } from '../../constants/Styles'

type ButtonProps = {
  buttonText: string
  onSubmit: () => void
}

export default function Button({
  buttonText,
  onSubmit
}: ButtonProps): ReactElement {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onSubmit}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    backgroundColor: Colors.background,
    textAlign: 'center',
    padding: 10
  },
  buttonText: {
    color: Colors.primaryColor,
    fontSize: FontSize.default,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})