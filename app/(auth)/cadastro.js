import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
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

  // NOVOS CAMPOS
  const [curso, setCurso] = useState("");
  const [turno, setTurno] = useState("");
  const [sala, setSala] = useState("");

  // ERROS
  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmar, setErroConfirmar] = useState("");
  const [erroLinkedin, setErroLinkedin] = useState("");
  const [erroGithub, setErroGithub] = useState("");
  const [erroTel, setErroTel] = useState("");

  const [erroCurso, setErroCurso] = useState("");
  const [erroTurno, setErroTurno] = useState("");
  const [erroSala, setErroSala] = useState("");

  // VALIDAÇÕES
  const validarNome = (nome) => nome.length >= 3;
  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validarSenha = (senha) => senha.length >= 6;
  const validarLinkedin = (url) => url.includes("linkedin.com");
  const validarGithub = (url) => url.includes("github.com");
  const validarTel = (tel) => /^\d{10,11}$/.test(tel);

  const handleRegister = async () => {
    let valido = true;

    // limpar erros
    setErroNome("");
    setErroEmail("");
    setErroSenha("");
    setErroConfirmar("");
    setErroLinkedin("");
    setErroGithub("");
    setErroTel("");
    setErroCurso("");
    setErroTurno("");
    setErroSala("");

    // validações básicas
    if (!nome.trim()) {
      setErroNome("Campo obrigatório");
      valido = false;
    } else if (!validarNome(nome)) {
      setErroNome("Mínimo 3 caracteres");
      valido = false;
    }

    if (!email.trim()) {
      setErroEmail("Campo obrigatório");
      valido = false;
    } else if (!validarEmail(email)) {
      setErroEmail("Email inválido");
      valido = false;
    }

    if (!senha.trim()) {
      setErroSenha("Campo obrigatório");
      valido = false;
    } else if (!validarSenha(senha)) {
      setErroSenha("Mínimo 6 caracteres");
      valido = false;
    }

    if (!confirmar.trim()) {
      setErroConfirmar("Campo obrigatório");
      valido = false;
    } else if (senha !== confirmar) {
      setErroConfirmar("Senhas não coincidem");
      valido = false;
    }

    if (!linkedin.trim()) {
      setErroLinkedin("Campo obrigatório");
      valido = false;
    } else if (!validarLinkedin(linkedin)) {
      setErroLinkedin("Link inválido");
      valido = false;
    }

    if (!github.trim()) {
      setErroGithub("Campo obrigatório");
      valido = false;
    } else if (!validarGithub(github)) {
      setErroGithub("Link inválido");
      valido = false;
    }

    if (!tel.trim()) {
      setErroTel("Campo obrigatório");
      valido = false;
    } else if (!validarTel(tel)) {
      setErroTel("Telefone inválido");
      valido = false;
    }

    // NOVAS VALIDAÇÕES
    if (!curso.trim()) {
      setErroCurso("Campo obrigatório");
      valido = false;
    }

    if (!turno.trim()) {
      setErroTurno("Campo obrigatório");
      valido = false;
    }

    if (!sala.trim()) {
      setErroSala("Campo obrigatório");
      valido = false;
    }

    if (!valido) return;

    const usuario = {
      nome,
      email,
      senha,
      linkedin,
      github,
      tel,
      curso,
      turno,
      sala,
    };

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
          {erroNome && <Text style={styles.erro}>{erroNome}</Text>}

          <TextInput
            placeholder="Email"
            placeholderTextColor="#ddd"
            onChangeText={(text) => setEmail(text.toLowerCase())}
            style={styles.input}
          />
          {erroEmail && <Text style={styles.erro}>{erroEmail}</Text>}

          <TextInput
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#ddd"
            onChangeText={setSenha}
            style={styles.input}
          />
          {erroSenha && <Text style={styles.erro}>{erroSenha}</Text>}

          <TextInput
            placeholder="Confirmar senha"
            secureTextEntry
            placeholderTextColor="#ddd"
            onChangeText={setConfirmar}
            style={styles.input}
          />
          {erroConfirmar && <Text style={styles.erro}>{erroConfirmar}</Text>}

          <Text style={styles.sectionTitle}>Informações adicionais</Text>

          <TextInput
            placeholder="LinkedIn"
            placeholderTextColor="#ddd"
            onChangeText={(text) => setLinkedin(text.toLowerCase())}
            style={styles.input}
          />
          {erroLinkedin && <Text style={styles.erro}>{erroLinkedin}</Text>}

          <TextInput
            placeholder="GitHub"
            placeholderTextColor="#ddd"
            onChangeText={(text) => setGithub(text.toLowerCase())}
            style={styles.input}
          />
          {erroGithub && <Text style={styles.erro}>{erroGithub}</Text>}

          <TextInput
            placeholder="Telefone"
            keyboardType="numeric"
            placeholderTextColor="#ddd"
            onChangeText={setTel}
            style={styles.input}
          />
          {erroTel && <Text style={styles.erro}>{erroTel}</Text>}

          {/* NOVA SEÇÃO */}
          <Text style={styles.sectionTitle}>Informações do aluno</Text>

          <TextInput
            placeholder="Curso"
            placeholderTextColor="#ddd"
            onChangeText={setCurso}
            style={styles.input}
          />
          {erroCurso && <Text style={styles.erro}>{erroCurso}</Text>}

          <TextInput
            placeholder="Turno"
            placeholderTextColor="#ddd"
            onChangeText={setTurno}
            style={styles.input}
          />
          {erroTurno && <Text style={styles.erro}>{erroTurno}</Text>}

          <TextInput
            placeholder="Sala"
            placeholderTextColor="#ddd"
            onChangeText={setSala}
            style={styles.input}
          />
          {erroSala && <Text style={styles.erro}>{erroSala}</Text>}

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
    backgroundColor: "#222",
    flexGrow: 1,
    paddingBottom: 40,
  },

  Header: {
    height: 100,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 40,
  },

  fiap: { color: "#E1306C", fontSize: 35, fontWeight: "bold" },
  conecta: {
    color: "#E1306C",
    fontSize: 25,
    marginLeft: 10,
    fontStyle: "italic",
  },

  body: { flex: 1 },

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

  textoBotao: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  link: { color: "#ccc", textAlign: "center", marginTop: 20 },

  linkDestaque: { color: "#E1306C", fontWeight: "bold" },

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
