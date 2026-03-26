import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type Status = "idle" | "loading" | "success" | "error";

type StatusFeedbackProps = {
  status: Status;
  error?: string | null;
  score?: number | null;
};

export const StatusFeedback = ({
  status,
  error,
  score,
}: StatusFeedbackProps) => {
  if (status === "loading") {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text style={styles.message}>Enviando imagem...</Text>
      </View>
    );
  }

  if (status === "error") {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error || "Ocorreu um erro ao enviar"}</Text>
      </View>
    );
  }

  if (status === "success") {
    return (
      <View style={styles.container}>
        <Text style={styles.success}>Pontuação: {score ?? "--"}</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: "center",
  },
  message: {
    marginTop: 8,
    textAlign: "center",
  },
  error: {
    color: "#d32f2f",
    textAlign: "center",
    fontWeight: "500",
  },
  success: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e7d32",
    textAlign: "center",
  },
});
