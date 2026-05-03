import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const handleLogin = async () => {
    let valido = true;

    setErroEmail("");
    setErroSenha("");

    if (!email.trim()) {
      setErroEmail("Campo obrigatório");
      valido = false;
    }

    if (!senha.trim()) {
      setErroSenha("Campo obrigatório");
      valido = false;
    }

    if (!valido) return;

    const data = await AsyncStorage.getItem("usuario");

    if (!data) {
      setErroEmail("Usuário não encontrado");
      return;
    }

    const usuario = JSON.parse(data);

    if (email === usuario.email && senha === usuario.senha) {
      await AsyncStorage.setItem("logado", "true");
      router.replace("/HomeScreen");
    } else {
      setErroSenha("Credenciais inválidas");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.Header}>
        <Text style={styles.fiap}>FIAP</Text>
        <Text style={styles.conecta}>conecta</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Login</Text>

        <TextInput
          placeholderTextColor="#ddd"
          placeholder="Email"
          onChangeText={(text) => setEmail(text.toLowerCase())}
          style={styles.input}
        />
        {erroEmail ? <Text style={styles.erro}>{erroEmail}</Text> : null}

        <TextInput
          placeholderTextColor="#ddd"
          placeholder="Senha"
          secureTextEntry
          onChangeText={setSenha}
          style={styles.input}
        />
        {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/cadastro")}>
          <Text style={styles.link}>
            Ainda não tem uma conta?{" "}
            <Text style={styles.linkDestaque}>Crie uma aqui</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  input: {
    backgroundColor: "#777",
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 99,
    color: "#fff",
  },

  Header: {
    height: 100,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  fiap: {
    color: "#E1306C",
    fontSize: 35,
    fontWeight: "bold",
  },
  conecta: {
    color: "#E1306C",
    fontSize: 25,
    marginLeft: 10,
    fontStyle: "italic",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },

  botao: {
    backgroundColor: "#E1306C",
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  link: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 20,
  },

  linkDestaque: {
    color: "#E1306C",
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },
  erro: {
    color: "#ff4d4d",
    marginLeft: 15,
    marginTop: -15,
    marginBottom: 10,
    fontSize: 12,
  },
});
