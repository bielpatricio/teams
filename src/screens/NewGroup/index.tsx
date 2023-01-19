import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const [groupName, setGroupName] = useState('')
  const navigation = useNavigation()

  async function handleNextPage() {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma')
      }

      await groupCreate(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={groupName}
          onChangeText={setGroupName}
        />
        <Button
          onPress={handleNextPage}
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  )
}
