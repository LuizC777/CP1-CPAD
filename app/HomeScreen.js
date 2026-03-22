import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
export default function Home() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.GroupSession1}>
        <View style={styles.GroupLeft}>
          <View>
            <Text style={styles.GroupTitle}>Front-end</Text>
            <Text style={styles.GroupDesc}>HTML e CSS</Text>
          </View>
          <View>
            <Text style={styles.GroupDesc}>30 de Março</Text>
            <Text style={styles.GroupDesc}>Laboratório 707</Text>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.GroupRight}>
          <View style={styles.ImgContainer}>
            <Text></Text>
          </View>
        </View>
      </View>

      <View style={styles.GroupSession2}>
        <View style={styles.GroupLeft}>
          <View>
            <Text style={styles.GroupTitle}>Pandas</Text>
            <Text style={styles.GroupDesc}>Python e dados</Text>
          </View>
          <View>
            <Text style={styles.GroupDesc}>05 de Abril</Text>
            <Text style={styles.GroupDesc}>Laboratório 302</Text>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.GroupRight}>
          <View style={styles.ImgContainer}>
            <Text></Text>
          </View>
        </View>
      </View>

      <View style={styles.GroupSession3}>
        <View style={styles.GroupLeft}>
          <View>
            <Text style={styles.GroupTitle}>JavaScript</Text>
            <Text style={styles.GroupDesc}>Uso de API no JS</Text>
          </View>
          <View>
            <Text style={styles.GroupDesc}>25 de Março</Text>
            <Text style={styles.GroupDesc}>Laboratório 404</Text>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.GroupRight}>
          <View style={styles.ImgContainer}>
            <Text></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#333",
  },
  ImgContainer: {
    width: 140,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 30,
    opacity: 0.8,
  },
  Button: {
    backgroundColor: "#fff",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 20,
  },
  ButtonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  GroupSession1: {
    padding: 5,
    flexDirection: "row",
    height: 280,
    width: 350,
    backgroundColor: "#447",
    borderRadius: 30,
    marginTop: 25,
  },
  GroupSession2: {
    padding: 5,
    flexDirection: "row",
    height: 280,
    width: 350,
    backgroundColor: "#464",
    borderRadius: 30,
    marginTop: 25,
  },
  GroupSession3: {
    padding: 5,
    flexDirection: "row",
    height: 280,
    width: 350,
    backgroundColor: "#ffae00",
    borderRadius: 30,
    marginTop: 25,
    marginBottom: 25,
  },
  GroupTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  GroupDesc: {
    color: "#fff",
    fontSize: 16,
    opacity: 0.7,
  },
  GroupLeft: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
  GroupRight: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
