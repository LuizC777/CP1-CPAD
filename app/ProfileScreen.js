import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
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
      <TouchableOpacity style={styles.ContactSection} onPress={() => Linking.openURL('https://github.com/LuizC777')}>
        <Ionicons name="logo-github" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>https://github.com/LuizC777</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContactSection} onPress={() => Linking.openURL('https://www.linkedin.com/in/luiz-claro-11b7762b8/')}>
        <Ionicons name="logo-linkedin" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>
          https://www.linkedin.com/in/luiz-c...
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContactSection} onPress={() => Linking.openURL('https://wa.me/5511997937796')}>
        <Ionicons name="logo-whatsapp" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>(11) 99793 - 7796</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ContactSection} onPress={() => Linking.openURL('mailto:luiz.claro.lima@gmail.com')}>
        <Ionicons name="mail" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>luiz.claro.lima@gmail.com</Text>
      </TouchableOpacity>
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
