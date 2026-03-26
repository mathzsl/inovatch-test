import { uploadImage } from '../services/uploadService'
import { useAppStore } from '../store/useAppStore'
import { saveScore } from '../utils/storage'

export const useUpload = () => {
  const {
    image,
    setLoading,
    setSuccess,
    setError,
    status,
  } = useAppStore()

  const upload = async () => {
    if (!image || status === 'loading') return

    try {
      setError(null)
      setLoading()

      const score = await uploadImage(image)

      setSuccess(score)
      await saveScore(score)
    } catch (err) {
      setError('Falha na conexão. Tente novamente.')
      throw err
    }
  }

  return { upload }
}