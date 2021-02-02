import * as React from 'react'

import ScrollList from '../../components/scroll-list'

const DATA = [
  {
    password: 'bd7acbea-c1b1-46c2-aed5-3ad53abbdf',
    title: 'First Item',
  },
  {
    password: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6',
    title: 'Second Item',
  },
  {
    password: '58694a0f-3da1-471f-bd96-145571e29d7',
    title: 'Third Item',
  },
  {
    password: '58694a0f-3da1-471f-bd96-145571e29d7',
    title: 'Third Item',
    name: 'batata doce'
  },
  {
    password: '58694a0f-3da1-471f-bd96-145571e29d7',
    title: 'Third Item',
    name: 'batata doce'
  },
  {
    password: '58694a0f-3da1-471f-bd96-145571e29d7',
    title: 'Third Item',
    name: 'batata doce'
  },
]

export default function ReminderScreen() {
  return (
    <ScrollList dataList={DATA} />
  )
}

