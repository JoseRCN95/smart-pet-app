import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Pedometer } from "expo-sensors";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { StackParamList } from "../../App";

type StepsScreenNavigationProp = StackNavigationProp<StackParamList, "Steps">;

export function StepsScreen() {
  const navigation = useNavigation<StepsScreenNavigationProp>();
  const [stepCount, setStepCount] = useState(0);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("Verificando...");

  useEffect(() => {
    console.log("StepsScreen montou");
    Pedometer.isAvailableAsync().then(
      (result) => {
        setIsPedometerAvailable(result ? "Disponível" : "Indisponível");
      },
      (error) => {
        setIsPedometerAvailable("Erro ao verificar: " + error);
      }
    );
  
    const subscription = Pedometer.watchStepCount((result) => {
      console.log("Passos atualizados:", result.steps);
      setStepCount(result.steps);
    });
  
    return () => {
      console.log("StepsScreen desmontou");
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Image source={require("../assets/images/steps_inside.png")} style={styles.stepsImage} />
      <Text style={styles.title}>Contador de Passos</Text>
      <Text style={styles.text}>Sensor: {isPedometerAvailable}</Text>
      <Text style={styles.steps}>Passos: {stepCount}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
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
    marginBottom: 20,
  },
  stepsImage: {
    width: 300,
    height: 120,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  steps: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2e7d32",
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#888",
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
});

export default StepsScreen;