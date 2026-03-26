import { Alert } from 'react-native'

export const handleUploadWithRetry = async (
  upload: () => Promise<void>
) => {
  try {
    await upload()
  } catch {
    Alert.alert(
      'Erro ao enviar',
      'Falha no envio da imagem',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Tentar novamente',
          onPress: async () => {
            try {
              await upload()
            } catch {
              Alert.alert(
                'Erro novamente',
                'Não foi possível enviar a imagem'
              )
            }
          },
        },
      ]
    )
  }
}