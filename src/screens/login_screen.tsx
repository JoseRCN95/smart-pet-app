import React from "react";
import { View, TextInput, Button, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { StackParamList } from "../../App";
import type { StackNavigationProp } from "@react-navigation/stack";

type LoginScreenNavigationProp = StackNavigationProp<StackParamList, "Login">;

export function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  
  return (
    <View style={styles.container}>
      
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />

      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      <View style={styles.buttonContainer}>
        <Button title="Login" color="#40a829" onPress={() => navigation.navigate("Menu")} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Criar Conta" color="#40a829" onPress={() => navigation.navigate("SignUp")} />
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
    paddingHorizontal: 20,
  },
  logo: {
    width: 250, 
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 5,
  },
});
export default LoginScreen;