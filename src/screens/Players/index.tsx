import { Header } from '@components/Header'
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { ListEmpty } from '@components/ListEmpty'
import { FlatList, Alert, TextInput } from 'react-native'
import { useState, useCallback, useEffect, useRef } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { Button } from '@components/Button'

import {
  useRoute,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native'
import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { AppError } from '@utils/AppError'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { playersGetByGroup } from '@storage/player/playersGetByGroup'
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam'
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup'
import { groupRemoveByName } from '@storage/group/groupRemoveByName'
import { Loading } from '@components/Loading'

type RouteParams = {
  group: string
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true)
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [playerName, setPlayerName] = useState('')
  const navigation = useNavigation()

  const newPlayerNameInputRef = useRef<TextInput>(null)

  const route = useRoute()
  const { group } = route.params as RouteParams

  async function handleAddPlayer() {
    if (playerName.trim().length === 0) {
      return Alert.alert('Novo Grupo', 'Informe o nome da turma')
    }

    const newPlayer = { name: playerName, team }

    try {
      await playerAddByGroup(newPlayer, group)
      setPlayers((state) => {
        return [...state, newPlayer]
      })
      setPlayerName('')
      newPlayerNameInputRef.current?.blur()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')
        console.log(error)
      }
    }
  }

  const fetchPlayersByTeam = useCallback(async () => {
    try {
      setIsLoading(true)
      const data = await playersGetByGroupAndTeam(group, team)
      setPlayers(data)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Pessoas',
        `Não foi possível carregar pessoas do time ${team}`,
      )
    } finally {
      setIsLoading(false)
    }
  }, [group, team])

  useEffect(() => {
    fetchPlayersByTeam()
  }, [fetchPlayersByTeam])

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      setPlayers((state) => {
        return players.filter((p) => p.name !== playerName)
      })
    } catch (error) {
      Alert.alert(
        'Remover pessoa',
        `Não foi possível remover ${playerName} do grupo ${group}`,
      )
    }
  }

  async function removeGroupByName() {
    try {
      await groupRemoveByName(group)

      navigation.navigate('groups')
    } catch (error) {
      Alert.alert('Remover grupo', `Não foi possível remover o grupo ${group}`)
    }
  }

  // Funcao chamada ao apertar o botao, serve para aparecer o alerta e chama a funcao que realmente remove o grupo
  function handleRemoveGroup() {
    Alert.alert('Remover', `Deseja remover o grupo ${group}?`, [
      {
        text: 'Sim',
        onPress: () => {
          removeGroupByName()
        },
      },
      {
        text: 'Nao',
        style: 'cancel',
      },
    ])
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={playerName}
          onChangeText={setPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddPlayer} icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              onPress={() => setTeam(item)}
              isActive={item === team}
              title={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <ListEmpty message="Crie um time" />}
          horizontal
        />
        <NumbersOfPlayers>{players?.length}</NumbersOfPlayers>
      </HeaderList>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              onRemove={() => handleRemovePlayer(item.name)}
              name={item.name}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
          ListEmptyComponent={() => <ListEmpty message="Adicione um jogador" />}
        />
      )}
      <Button
        onPress={handleRemoveGroup}
        title="Remover turma"
        type="secondary"
      />
    </Container>
  )
}
