import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.GroupSession}>
        <View style={styles.GroupLeft}>
          <Text style={styles.GroupTitle}>Titulo</Text>
        </View>
        <View style={styles.GroupRight}>
          <Text style={styles.GroupTitle}>FOTO</Text>
        </View>
      </View>

      <View style={styles.GroupSession}>
        <Text style={styles.GroupTitle}>TESTE</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },
  GroupSession: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    height: 250,
    width: 350,
    backgroundColor: "#E1306C",
    borderRadius: 30,
    marginBottom: 30,
  },
  GroupTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  GroupLeft: {
    backgroundColor: "red",
    flex: 1,
    padding: 15,
  },
  GroupRight: {
    backgroundColor: "green",
    flex: 1,
  },
});
