import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto_primario}>Mi primer paso en Android Studio</Text>
      <Text style={styles.texto_secundario}>Primer Desafio Matias Sanchez</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  texto_primario: {
    color: "red",
    fontSize: 22,
  },
  texto_secundario: {
    color: "grey",
    fontSize: 15,
  },
});
