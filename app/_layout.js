import { Tabs } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Layout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.push("/ScreenThree")}
            style={styles.headerButton}
          >
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={"#E1306C"}
            />
            <View>
              <Text style={styles.headerText}>LUIZ CLARO LIMA</Text>
              <Text style={styles.headerText}>2CCPO</Text>
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
        name="ScreenTwo"
        options={{
          tabBarShowLabel: false,
          headerTitle: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bug-outline" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ScreenThree"
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
