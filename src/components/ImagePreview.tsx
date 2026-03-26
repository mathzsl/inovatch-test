import { Image, StyleSheet, View } from 'react-native'

type ImagePreviewProps = {
  uri: string
}

export const ImagePreview = ({ uri }: ImagePreviewProps) => (
  <View
    style={styles.container}
  >
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  </View>
)


const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 220,
  },
})