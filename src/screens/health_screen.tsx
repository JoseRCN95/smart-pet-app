import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackParamList } from "../../App";
import type { StackNavigationProp } from "@react-navigation/stack";

type HealthNavigationProp = StackNavigationProp<StackParamList, "Health">;

export function HealthScreen() {
  const navigation = useNavigation<HealthNavigationProp>();

  
  const [heartRate, setHeartRate] = useState<number>(85);

  
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeartRate = Math.floor(Math.random() * (90 - 80 + 1)) + 80; // Gera um valor entre 80 e 90
      setHeartRate(newHeartRate);
    }, 5000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  
  const [showVaccines, setShowVaccines] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [showMedications, setShowMedications] = useState(false);

  return (
    <View style={styles.container}>
      
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />

       
      <Text style={styles.heartRateText}>{heartRate} BPM</Text>
      <Image source={require("../assets/images/heartbeat.png")} style={styles.heartImage} />

      
      <TouchableOpacity style={styles.button} onPress={() => setShowVaccines(!showVaccines)}>
        <Text style={styles.buttonText}>Vacinas</Text>
      </TouchableOpacity>
      {showVaccines && (
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>Vacina Antirrábica - 12/02/2024</Text>
          <Text style={styles.listItem}>V8 - 10/11/2023</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={() => setShowAppointments(!showAppointments)}>
        <Text style={styles.buttonText}>Consultas</Text>
      </TouchableOpacity>
      {showAppointments && (
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>Consulta Geral - 20/01/2024</Text>
          <Text style={styles.listItem}>Check-up - 05/07/2023</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={() => setShowMedications(!showMedications)}>
        <Text style={styles.buttonText}>Medicamentos</Text>
      </TouchableOpacity>
      {showMedications && (
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>Vermífugo - 10/02/2024</Text>
          <Text style={styles.listItem}>Anti-pulgas - 15/09/2023</Text>
        </View>
      )}
      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
    </View>
  );
}

// Estilos
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
    marginBottom: 35,
  },
  heartImage: {
    width: 150,
    height: 120,
    marginBottom: 40,
  },
  heartRateText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  listContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    backgroundColor: "#888",
  },
});

export default HealthScreen;