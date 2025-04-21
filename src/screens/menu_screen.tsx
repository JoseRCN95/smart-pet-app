import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackParamList } from "../../App";
import type { StackNavigationProp } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";

type MenuScreenNavigationProp = StackNavigationProp<StackParamList, "Menu">;

export function MenuScreen() {
  const navigation = useNavigation<MenuScreenNavigationProp>();
  const [petPhoto, setPetPhoto] = useState<string | null>(null);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão negada", "Você precisa permitir acesso à galeria.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPetPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      
      <TouchableOpacity onPress={handlePickImage}>
        <Image
          source={petPhoto ? { uri: petPhoto } : require("../assets/images/Mandela.png")}
          style={styles.petPhoto}
        />
      </TouchableOpacity>
      
      <Text style={styles.petName}>Mandela</Text>
      
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Steps")}>
          <Image source={require("../assets/images/steps.png")} style={styles.icon} />
          <Text style={styles.buttonText}>Passos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Alarm")}>
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
    backgroundColor: "##d4edda",
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "bold",
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