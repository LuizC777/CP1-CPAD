import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [tel, setTel] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmar, setErroConfirmar] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [erroLinkedin, setErroLinkedin] = useState("");
  const [erroGithub, setErroGithub] = useState("");
  const [erroTel, setErroTel] = useState("");

  const validarNome = (nome) => {
    return nome.length >= 3;
  };

  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validarSenha = (senha) => {
    return senha.length >= 6;
  };

  const validarLinkedin = (url) => {
    return url.includes("linkedin.com");
  };

  const validarGithub = (url) => {
    return url.includes("github.com");
  };

  const validarTel = (tel) => {
    return /^\d{10,11}$/.test(tel);
  };

  const handleRegister = async () => {
    let valido = true;

    setErroNome("");
    setErroEmail("");
    setErroSenha("");
    setErroConfirmar("");
    setErroLinkedin("");
    setErroGithub("");
    setErroTel("");

    if (!nome) {
      setErroNome("Digite seu nome");
      valido = false;
    }

    if (!validarNome(nome)) {
      setErroNome("O nome deve ter pelo menos 3 caracteres");
      valido = false;
    }

    if (!validarEmail(email)) {
      setErroEmail("Email inválido");
      valido = false;
    }

    if (!validarSenha(senha)) {
      setErroSenha("A senha deve ter pelo menos 6 caracteres");
      valido = false;
    }

    if (senha !== confirmar) {
      setErroConfirmar("As senhas não coincidem");
      valido = false;
    }

    if (linkedin && !validarLinkedin(linkedin)) {
      setErroLinkedin("Link do LinkedIn inválido");
      valido = false;
    }

    if (github && !validarGithub(github)) {
      setErroGithub("Link do GitHub inválido");
      valido = false;
    }

    if (tel && !validarTel(tel)) {
      setErroTel("Telefone deve ter 10 ou 11 números");
      valido = false;
    }

    // VALIDAÇÃO DE CAMPOS OBRIGATÓRIOS

    if (!nome.trim()) {
      setErroNome("Campo obrigatório");
      valido = false;
    }

    if (!email.trim()) {
      setErroEmail("Campo obrigatório");
      valido = false;
    }

    if (!senha.trim()) {
      setErroSenha("Campo obrigatório");
      valido = false;
    }

    if (!confirmar.trim()) {
      setErroConfirmar("Campo obrigatório");
      valido = false;
    }
    if (!linkedin.trim()) {
      setErroLinkedin("Campo obrigatório");
      valido = false;
    }

    if (!github.trim()) {
      setErroGithub("Campo obrigatório");
      valido = false;
    }

    if (!tel.trim()) {
      setErroTel("Campo obrigatório");
      valido = false;
    }

    if (!valido) return;

    const usuario = { nome, email, senha };

    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));

    router.replace("/login");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#222" }}
      behavior="padding"
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.Header}>
          <Text style={styles.fiap}>FIAP</Text>
          <Text style={styles.conecta}>conecta</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Cadastro</Text>
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#ddd"
            onChangeText={setNome}
            style={styles.input}
          />
          {erroNome ? <Text style={styles.erro}>{erroNome}</Text> : null}

          <TextInput
            placeholder="Email"
            placeholderTextColor="#ddd"
            onChangeText={setEmail}
            style={styles.input}
          />
          {erroEmail ? <Text style={styles.erro}>{erroEmail}</Text> : null}

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#ddd"
            secureTextEntry
            onChangeText={setSenha}
            style={styles.input}
          />
          {erroSenha ? <Text style={styles.erro}>{erroSenha}</Text> : null}

          <TextInput
            placeholder="Confirmar senha"
            placeholderTextColor="#ddd"
            secureTextEntry
            onChangeText={setConfirmar}
            style={styles.input}
          />
          {erroConfirmar ? (
            <Text style={styles.erro}>{erroConfirmar}</Text>
          ) : null}
          <Text style={styles.sectionTitle}>Informações adicionais</Text>

          <TextInput
            placeholder="LinkedIn"
            placeholderTextColor="#ddd"
            onChangeText={setLinkedin}
            style={styles.input}
          />
          {erroLinkedin ? (
            <Text style={styles.erro}>{erroLinkedin}</Text>
          ) : null}

          <TextInput
            placeholder="GitHub"
            placeholderTextColor="#ddd"
            onChangeText={setGithub}
            style={styles.input}
          />
          {erroGithub ? <Text style={styles.erro}>{erroGithub}</Text> : null}

          <TextInput
            placeholder="Telefone"
            placeholderTextColor="#ddd"
            keyboardType="numeric"
            onChangeText={setTel}
            style={styles.input}
          />
          {erroTel ? <Text style={styles.erro}>{erroTel}</Text> : null}

          <TouchableOpacity style={styles.botao} onPress={handleRegister}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/login")}>
            <Text style={styles.link}>
              Já tem uma conta? <Text style={styles.linkDestaque}>Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },

  Header: {
    height: 100,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 40,
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
    justifyContent: "flex-start",
    backgroundColor: "#222",
  },

  input: {
    backgroundColor: "#777",
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 99,
    color: "#fff",
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

  erro: {
    color: "#ff4d4d",
    marginLeft: 15,
    marginTop: -15,
    marginBottom: 10,
    fontSize: 12,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
