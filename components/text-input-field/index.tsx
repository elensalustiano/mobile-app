import React, { ReactElement } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

import { Colors, FontSize } from '../../constants/Styles'

type TextInputFieldProps = {
  value?: string
  label: string,
  isRequired?: boolean
  onChangeText: (value: string) => void
}

export default function TextInputField({
  value,
  label,
  isRequired,
  onChangeText
}: TextInputFieldProps): ReactElement {
  return (
    <>
      <Text style={styles.label}>{label} {isRequired ? '*' : ''}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
      />
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    color: Colors.text,
    fontSize: FontSize.medium,
    marginTop: 16,
    marginLeft: 16,
    fontWeight: 'bold'
  },
  textInput: {
    height: 41,
    backgroundColor: Colors.background,
    borderRadius: 15,
    margin: 10,
    paddingLeft: 5
  }
})