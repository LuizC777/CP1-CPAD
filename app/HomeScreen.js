import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";
export default function Home() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Sessões disponíveis</Text>
      </View>
      <View style={[styles.GroupSession, styles.sessionBg1]}>
        <View style={styles.GroupLeft}>
          <View>
            <Text style={styles.GroupTitle}>Front-end</Text>
            <Text style={styles.GroupDesc}>HTML e CSS</Text>
          </View>
          <View>
            <Text style={styles.GroupDesc}>30 de Março</Text>
            <Text style={styles.GroupDesc}>Laboratório 707</Text>

            <TouchableOpacity
              onPress={() => setActive1(!active1)}
              style={[styles.Button, active1 ? styles.active : styles.inactive]}
            >
              <Text
                style={[
                  styles.ButtonText,
                  active1 ? styles.ButtonTextActive : styles.ButtonTextInactive,
                ]}
              >
                {active1 ? "Entrou" : "Entrar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.GroupRight}>
          <View style={styles.ImgContainer}>
            <Image source={require("../assets/html.jpg")} style={styles.Img} />
          </View>
        </View>
      </View>

      <View style={[styles.GroupSession, styles.sessionBg2]}>
        <View style={styles.GroupLeft}>
          <View>
            <Text style={styles.GroupTitle}>Pandas</Text>
            <Text style={styles.GroupDesc}>Python e dados</Text>
          </View>
          <View>
            <Text style={styles.GroupDesc}>05 de Abril</Text>
            <Text style={styles.GroupDesc}>Laboratório 302</Text>
            <TouchableOpacity
              onPress={() => setActive2(!active2)}
              style={[styles.Button, active2 ? styles.active : styles.inactive]}
            >
              <Text
                style={[
                  styles.ButtonText,
                  active2 ? styles.ButtonTextActive : styles.ButtonTextInactive,
                ]}
              >
                {active2 ? "Entrou" : "Entrar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.GroupRight}>
          <View style={styles.ImgContainer}>
            <Image
              source={require("../assets/grafico.png")}
              style={styles.Img}
            />
          </View>
        </View>
      </View>

      <View style={[styles.GroupSession, styles.sessionBg3]}>
        <View style={styles.GroupLeft}>
          <View>
            <Text style={styles.GroupTitle}>JavaScript</Text>
            <Text style={styles.GroupDesc}>Uso de API no JS</Text>
          </View>
          <View>
            <Text style={styles.GroupDesc}>25 de Março</Text>
            <Text style={styles.GroupDesc}>Laboratório 404</Text>
            <TouchableOpacity
              onPress={() => setActive3(!active3)}
              style={[styles.Button, active3 ? styles.active : styles.inactive]}
            >
              <Text
                style={[
                  styles.ButtonText,
                  active3 ? styles.ButtonTextActive : styles.ButtonTextInactive,
                ]}
              >
                {active3 ? "Entrou" : "Entrar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.GroupRight}>
          <View style={styles.ImgContainer}>
            <Image
              source={require("../assets/codigo.webp")}
              style={styles.Img}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#333",
    padding: 30,
  },
  titleArea: {
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },

  Button: {
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 20,
  },
  active: { backgroundColor: "#000" },
  inactive: { backgroundColor: "#fff" },
  ButtonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  ButtonTextActive: { color: "#E1306C" },
  ButtonTextInactive: { color: "#000" },

  GroupSession: {
    padding: 5,
    flexDirection: "row",
    height: 280,
    width: 350,
    backgroundColor: "#447",
    borderRadius: 30,
    marginTop: 13,
    marginBottom: 13,
  },
  sessionBg1: { backgroundColor: "#447" },
  sessionBg2: { backgroundColor: "#464" },
  sessionBg3: { backgroundColor: "#ffae00" },

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
    width: "50%",
    padding: 15,
    justifyContent: "space-between",
  },
  GroupRight: {
    width: "50%",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  ImgContainer: {
    width: 140,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 30,
    opacity: 0.8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  Img: {
    width: 140,
    height: 200,
  },
});
