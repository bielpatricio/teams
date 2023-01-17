import { FlatList, Text } from 'react-native'
import { Container } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { ListEmpty } from '@components/ListEmpty/'
import { Button } from '@components/Button'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList // substituir o map -> ele renderiza apenas os elementos que cabem na tela
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} key={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Cadastre a primeira turma" />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  )
}
