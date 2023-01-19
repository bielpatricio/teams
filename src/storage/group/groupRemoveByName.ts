import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'
import { groupsGetAll } from './groupsGetAll'
import { AppError } from '@utils/AppError'

export async function groupRemoveByName(groupName: string) {
  // eslint-disable-next-line
  try {
    const storedGroups = await groupsGetAll()
    const groups = storedGroups.filter((group) => group !== groupName)

    const storage = JSON.stringify(groups)

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
  } catch (error) {
    throw error
  }
}
