import React, { ReactElement, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'

import { Colors, FontSize } from '../../constants/Styles'
import { Reminder } from '../../types/reminder'

import { removeConsecutiveSpaces, removeSpaces } from '../../helpers/string'
import TextInputField from '../../components/text-input-field'

type SaveReminderProps = {
  item?: Reminder
}

export default function SaveReminder({ item }: SaveReminderProps): ReactElement {
  const [data, setData] = useState<Reminder>({
    title: '',
    name: '',
    password: ''
  })

  const onChangeTitle = (value: string) =>
    setData({ ...data, title: removeConsecutiveSpaces(value) })

  const onChangeName = (value: string) =>
    setData({ ...data, name: removeConsecutiveSpaces(value) })

  const onChangePassword = (value: string) =>
    setData({ ...data, password: removeSpaces(value) })

  const onSubmit = () => {
    const hasError = Object.entries(data).some(([key, value]) => {
      return key === 'name' ? false : !value
    })

    if (hasError) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios')
    }

  }

  useEffect(() => {
    if (item) setData(item)
  }, [item])

  return (
    <View style={styles.container}>
      <TextInputField
        isRequired
        value={data.title}
        label={'Título'}
        onChangeText={onChangeTitle}
      />
      <TextInputField
        value={data.name}
        label={'Usuário'}
        onChangeText={onChangeName}
      />
      <TextInputField
        isRequired
        value={data.password}
        label={'Senha'}
        onChangeText={onChangePassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <Text style={styles.warningText}>* campo obrigatorio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    height: '100%'
  },
  warningText: {
    color: Colors.warning,
    marginTop: 100,
    marginLeft: 10
  },
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