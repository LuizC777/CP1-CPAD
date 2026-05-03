import { View, TextInput, Button, Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      return Alert.alert("Preencha tudo");
    }

    if (senha.length < 6) {
      return Alert.alert("Senha muito curta");
    }

    if (senha !== confirmar) {
      return Alert.alert("Senhas diferentes");
    }

    const usuario = { nome, email, senha };

    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));

    Alert.alert("Cadastro feito!");
    router.replace("/login");
  };

  return (
    <View>
      <TextInput placeholder="Nome" onChangeText={setNome} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} />
      <TextInput
        placeholder="Confirmar senha"
        secureTextEntry
        onChangeText={setConfirmar}
      />

      <Button title="Cadastrar" onPress={handleRegister} />
      <Button
        title="Voltar para login"
        onPress={() => router.replace("/login")}
      />
    </View>
  );
}
