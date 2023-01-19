import { GROUP_COLLECTION } from '@storage/storageConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function groupsGetAll() {
  // eslint-disable-next-line
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

    const groups: string[] = storage ? JSON.parse(storage) : []

    return groups
  } catch (error) {
    throw error
  }
}
