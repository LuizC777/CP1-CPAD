import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useState } from "react";
export default function ConnectionScreen() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Conexões</Text>
      </View>
      <View style={styles.inputArea}>
        <Ionicons name="search" size={24} color="#ddd" />
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Pesquisar"
          placeholderTextColor="#ddd"
          style={styles.input}
        />
      </View>
      <View style={styles.bar}></View>
      <View style={styles.connection}>
        <Ionicons name="person" size={30} color="#E1306C" />
        <View>
          <Text style={styles.innerText}>Gabriel Nacarelli</Text>
          <Text style={styles.innerText}>Ciência da computação - 2CCPO</Text>
        </View>
      </View>
      <View style={styles.connection}>
        <Ionicons name="person" size={30} color="#E1306C" />
        <View>
          <Text style={styles.innerText}>Rafael Talarico</Text>
          <Text style={styles.innerText}>Ciência da computação - 2CCPG</Text>
        </View>
      </View>
      <View style={styles.connection}>
        <Ionicons name="person" size={30} color="#E1306C" />
        <View>
          <Text style={styles.innerText}>Leonardo Luster</Text>
          <Text style={styles.innerText}>Ciência da computação - 2CCPG</Text>
        </View>
      </View>
      <View style={styles.connection}>
        <Ionicons name="person" size={30} color="#E1306C" />
        <View>
          <Text style={styles.innerText}>Mateus Patrício</Text>
          <Text style={styles.innerText}>Ciência da computação - 2CCPG</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    height: "100%",
    padding: 30,
    alignItems: "center",
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
  bar: {
    width: 280,
    height: 6,
    backgroundColor: "#111",
    margin: 20,
  },
  input: {
    color: "#ddd",
    marginLeft: 10,
  },
  inputArea: {
    width: 340,
    height: 45,
    paddingLeft: 14,
    borderRadius: 20,
    backgroundColor: "#111",
    flexDirection: "row",
    alignItems: "center",
  },
  connection: {
    flexDirection: "row",
    width: 340,
    height: 100,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: "#111",
    backgroundColor: "#222",
    alignItems: "center",
    paddingLeft: 10,
    marginBottom: 15,
  },
  innerText: {
    color: "#fff",
    fontSize: 15,
    opacity: 0.7,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
