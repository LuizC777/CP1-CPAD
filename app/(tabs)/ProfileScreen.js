import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const router = useRouter();

  const [usuario, setUsuario] = useState(null);

  const pedirPermissao = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Permissão necessária para acessar a galeria");
    }
  };

  const [imagem, setImagem] = useState(null);

  const escolherImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImagem(uri);

      await AsyncStorage.setItem("fotoPerfil", uri);
    }
  };

  useEffect(() => {
    const carregarImagem = async () => {
      const uri = await AsyncStorage.getItem("fotoPerfil");
      if (uri) {
        setImagem(uri);
      }
    };

    carregarImagem();
    pedirPermissao();
  }, []);

  const removerImagem = async () => {
    await AsyncStorage.removeItem("fotoPerfil");
    setImagem(null);
  };

  useEffect(() => {
    const carregarUsuario = async () => {
      const data = await AsyncStorage.getItem("usuario");
      if (data) {
        setUsuario(JSON.parse(data));
      }
    };

    carregarUsuario();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("logado");
    router.replace("/login");
  };

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.ImgSection}>
        <TouchableOpacity onPress={escolherImagem}>
          {imagem ? (
            <Image
              source={{ uri: imagem }}
              style={{ width: 170, height: 170, borderRadius: 100 }}
            />
          ) : (
            <Ionicons
              name="person-circle-outline"
              size={170}
              color={"#E1306C"}
            />
          )}
        </TouchableOpacity>

        {imagem && (
          <TouchableOpacity onPress={removerImagem}>
            <Text style={{ color: "#E1306C", marginTop: 10 }}>
              Remover foto
            </Text>
          </TouchableOpacity>
        )}

        <Text style={styles.name}>{usuario.nome}</Text>

        <Text style={styles.nameDesc}>{usuario.curso}</Text>
        <Text style={styles.nameDesc}>
          {usuario.sala.toUpperCase()} - {usuario.turno}
        </Text>
      </View>

      <View style={styles.bar}></View>

      <TouchableOpacity
        style={styles.ContactSection}
        onPress={() => Linking.openURL(`https://${usuario.github}`)}
      >
        <Ionicons name="logo-github" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>{usuario.github}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ContactSection}
        onPress={() => Linking.openURL(`https://${usuario.linkedin}`)}
      >
        <Ionicons name="logo-linkedin" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>{usuario.linkedin}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ContactSection}
        onPress={() => Linking.openURL(`https://wa.me/55${usuario.tel}`)}
      >
        <Ionicons name="logo-whatsapp" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>{usuario.tel}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ContactSection}
        onPress={() => Linking.openURL(`mailto:${usuario.email}`)}
      >
        <Ionicons name="mail" size={25} color="#E1306C" />
        <Text style={styles.ContactText}>{usuario.email}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.LogoutButton} onPress={logout}>
        <Text style={styles.ButtonText}>Sair</Text>
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

  LogoutButton: {
    backgroundColor: "#E1306C",
    padding: 10,
    width: 90,
    borderRadius: 99,
    marginTop: 20,
    alignItems: "center",
  },

  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
