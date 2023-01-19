import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playersGetByGroup } from './playersGetByGroup'

export async function playersGetByGroupAndTeam(group: string, team: string) {
  // eslint-disable-next-line
  try {
    const storage = await playersGetByGroup(group)

    const playersTeam = storage.filter((player) => player.team === team)

    return playersTeam
  } catch (error) {
    throw error
  }
}
