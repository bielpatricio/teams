import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playersGetByGroup } from './playersGetByGroup'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  // eslint-disable-next-line
  try {
    const storedGroups = await playersGetByGroup(group)

    const playerAlreadyExistsInTeam = storedGroups.filter(
      (player) => player.name === newPlayer.name,
    )

    if (playerAlreadyExistsInTeam.length > 0) {
      throw new AppError(
        `Já existe uma pessoa com o nome ${newPlayer.name} cadastrado neste time!`,
      )
    }

    const storage = JSON.stringify([...storedGroups, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
