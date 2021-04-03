import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Colors, FontSize } from '../../constants/Styles'
import { Reminder } from '../../types/reminder'

type InfoCardProps = {
  item: Reminder
}

export default function InfoCard({ item }: InfoCardProps) {
  const { title, name, password } = item
  const isShowPassword = true

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.text, name ? false : styles.warning]}>
        {name || 'não informado'}
      </Text>
      {isShowPassword ?
        <Text style={styles.text}>{password}</Text>
        :
        <Text style={styles.text}>*****************</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 14,
    borderRadius: 10,
  },
  title: {
    color: Colors.text,
    fontSize: FontSize.medium,
    fontWeight: 'bold'
  },
  text: {
    color: Colors.text,
    fontSize: FontSize.default,
    marginTop: 8
  },
  warning: {
    color: Colors.warning
  }
})