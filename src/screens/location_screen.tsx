import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackParamList } from "../../App";
import type { StackNavigationProp } from "@react-navigation/stack";

type LocationScreenNavigationProp = StackNavigationProp<StackParamList, "Location">;

export function LocationScreen() {
  const navigation = useNavigation<LocationScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />

      {/* Imagem do mapa*/}
      <Image source={require("../assets/images/mapa.png")} style={styles.mapImage} />

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##d4edda",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 75,
    marginBottom: 15,
  },
  mapImage: {
    width: "100%",
    height: "66%",
    resizeMode: "contain",
    borderWidth: 2,   
    borderColor: "grey", 
    borderRadius: 2,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#888",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LocationScreen;