import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playersGetByGroup } from './playersGetByGroup'

export async function playerRemoveByGroup(playerName: string, group: string) {
  // eslint-disable-next-line
  try {
    const storedGroups = await playersGetByGroup(group)

    const filtered = storedGroups.filter((player) => player.name !== playerName)

    const storage = JSON.stringify(filtered)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
