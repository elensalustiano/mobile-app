import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export type ItemProps = {
  title: String
  password: String
  name?: String
}

type InfoCardProps = {
  item: ItemProps
}

export default function InfoCard({ item }: InfoCardProps) {
  const { title, name, password } = item

  return (
    <View style={styles.container}>
      <Text style={styles.container}>{title}</Text>
      <Text>{name || 'não informado'}</Text>
      <Text>{password}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})