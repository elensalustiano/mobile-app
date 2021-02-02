import * as React from 'react'
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'

import InfoCard, { ItemProps } from '../info-card'

type FlatListType = {
  item: ItemProps
  index: Number
  separators: Object
}

type ListProps = {
  dataList: Array<ItemProps>
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
