import { Header } from '@components/Header'
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { ListEmpty } from '@components/ListEmpty'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { Button } from '@components/Button'

export function Players() {
  const [teams, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Jogador 1', 'Jogador 2'])
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nova turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          // value={participantName}
          // onChangeText={setParticipantName}
        />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              onPress={() => setTeam(item)}
              isActive={item === teams}
              title={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <ListEmpty message="Crie um time" />}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard onRemove={() => {}} name={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => <ListEmpty message="Adicione um jogador" />}
      />

      <Button title="Remover Turma" type="secondary" />
    </Container>
  )
}
