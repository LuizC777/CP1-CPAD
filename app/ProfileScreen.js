import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ImgSection}>
        <Ionicons name="person-circle-outline" size={170} color={"#E1306C"} />
        <Text style={styles.name}>Luiz Claro Lima</Text>
        <Text style={styles.nameDesc}>Ciência da computação</Text>
        <Text style={styles.nameDesc}>2CCPO - Noturno</Text>
      </View>
      <View style={styles.bar}></View>
      <View style={styles.ContactSection}>
        <Ionicons name="logo-github" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>https://github.com/LuizC777</Text>
      </View>
      <View style={styles.ContactSection}>
        <Ionicons name="logo-linkedin" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>
          https://www.linkedin.com/in/luiz-c...
        </Text>
      </View>
      <View style={styles.ContactSection}>
        <Ionicons name="logo-whatsapp" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>(11) 99793 - 7796</Text>
      </View>
      <View style={styles.ContactSection}>
        <Ionicons name="mail" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>luiz.claro.lima@gmail.com</Text>
      </View>
      <View style={styles.ContactSection}>
        <Ionicons name="download" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>curriculo.pdf</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    height: "100%",
  },
  ImgSection: {
    margin: 20,
    alignItems: "center",
  },
  name: {
    color: "#E1306C",
    fontSize: 32,
  },
  nameDesc: {
    color: "#fff",
    opacity: 0.7,
    fontSize: 18,
    marginTop: 5,
  },

  bar: {
    width: 280,
    height: 6,
    backgroundColor: "#222",
    marginBottom: 20,
  },

  ContactSection: {
    flexDirection: "row",
    width: 320,
    height: 50,
    backgroundColor: "#222",
    borderLeftWidth: 6,
    borderLeftColor: "#E1306C",
    marginBottom: 13,
    alignItems: "center",
    paddingLeft: 10,
  },
  ContactText: {
    fontSize: 16,
    color: "#E1306C",
    textDecorationLine: "underline",
    opacity: 0.7,
    marginLeft: 10,
  },
});
