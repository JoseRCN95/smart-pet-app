import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackParamList } from "../../App";
import type { StackNavigationProp } from "@react-navigation/stack";

type MenuScreenNavigationProp = StackNavigationProp<StackParamList, "Menu">;

export function MenuScreen() {
  const navigation = useNavigation<MenuScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      
      {/* Foto do animal */}
      <Image source={require("../assets/images/Mandela.png")} style={styles.petPhoto} />
      
      {/* Nome do animal */}
      <Text style={styles.petName}>Mandela</Text>
      
      {/* Botões */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Location")}>
          <Image source={require("../assets/images/location.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Health")}>
          <Image source={require("../assets/images/health.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Saúde</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/images/steps.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Passos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/images/alarm.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Alarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##d4edda',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  petPhoto: {
    width: 120,
    height: 120,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 10,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    width: 160,
    height: 160,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MenuScreen;
