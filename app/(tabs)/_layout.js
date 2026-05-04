import { Tabs } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Layout() {
  const router = useRouter();

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const carregarUsuario = async () => {
      const data = await AsyncStorage.getItem("usuario");
      if (data) {
        setUsuario(JSON.parse(data));
      }
    };

    carregarUsuario();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.navigate("/ProfileScreen")}
            style={styles.headerButton}
          >
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={"#E1306C"}
            />

            <View>
              <Text style={styles.headerText}>
                {usuario ? usuario.nome.toUpperCase() : "Carregando..."}
              </Text>

              <Text style={styles.headerText}>
                {usuario ? usuario.sala.toUpperCase() : ""}
              </Text>
            </View>
          </TouchableOpacity>
        ),

        headerRight: () => <Text style={styles.fiap}>FIAP</Text>,

        tabBarStyle: {
          backgroundColor: "#111",
          borderTopWidth: 0,
        },

        headerStyle: {
          backgroundColor: "#111",
        },

        headerTintColor: "#E1306C",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        tabBarActiveTintColor: "#E1306C",
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          tabBarShowLabel: false,
          headerTitle: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ConnectionScreen"
        options={{
          tabBarShowLabel: false,
          headerTitle: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"
        options={{
          tabBarShowLabel: false,
          headerTitle: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  headerText: {
    color: "#E1306C",
    marginLeft: 5,
    fontSize: 15,
  },

  fiap: {
    color: "#E1306C",
    fontSize: 35,
    marginRight: 20,
    marginBottom: 2,
  },
});
