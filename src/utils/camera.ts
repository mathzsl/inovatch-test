import * as ImagePicker from "expo-image-picker";

export const takePhoto = async () => {
  const permission = await ImagePicker.requestCameraPermissionsAsync();

  if (!permission.granted) {
    throw new Error("Permissão de câmera negada");
  }

  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.5,
  });

  if (!result.canceled) {
    return result.assets[0].uri;
  }

  return null;
};
