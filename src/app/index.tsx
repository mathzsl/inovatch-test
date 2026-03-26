import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useUpload } from "../hooks/useUpload";
import { useAppStore } from "../store/useAppStore";
import { getScore } from "../utils/storage";

import { handleUploadWithRetry } from "../utils/handleUploadWithRetry";

import { resetUpload } from "@/services/uploadService";
import { takePhoto } from "@/utils/camera";
import { Button } from "../components/Button";
import { ImagePreview } from "../components/ImagePreview";
import { StatusFeedback } from "../components/StatusFeedback";

export default function HomeScreen() {
  const { image, score, status, error, setImage, setSuccess } = useAppStore();

  const { upload } = useUpload();

  const handleTakePhoto = async () => {
    const uri = await takePhoto();

    if (uri) {
      resetUpload();
      setImage(uri);
    }
  };

  const handleUpload = () => {
    handleUploadWithRetry(upload);
  };

  useEffect(() => {
    const loadLastScore = async () => {
      const saved = await getScore();
      if (saved !== null) setSuccess(saved);
    };

    loadLastScore();
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Upload de Imagem
      </Text>

      <Button
        title={status === "loading" ? "Processando..." : "Tirar foto"}
        onPress={handleTakePhoto}
        disabled={status === "loading"}
      />

      {image && <ImagePreview uri={image} />}

      {image && (
        <Button
          title="Enviar imagem"
          onPress={handleUpload}
          loading={status === "loading"}
        />
      )}

      <StatusFeedback status={status} error={error} score={score} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});
