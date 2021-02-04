import * as React from 'react'
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'

import InfoCard from '../info-card'
import { Reminder } from '../../types/reminder'

type FlatListType = {
  item: Reminder
  index: Number
  separators: Object
}

type ListProps = {
  dataList: Array<Reminder>
}

export default function ScrollList({ dataList }: ListProps) {

  const renderItem = ({ item }: FlatListType) => (
    <InfoCard item={item} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
})
