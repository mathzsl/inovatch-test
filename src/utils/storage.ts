import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY = 'LAST_SCORE'

export const saveScore = async (score: number) => {
  await AsyncStorage.setItem(KEY, String(score))
}

export const getScore = async () => {
  const value = await AsyncStorage.getItem(KEY)
  return value ? Number(value) : null
}