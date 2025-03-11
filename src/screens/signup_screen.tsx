import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

// Definição do esquema de validação
const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha obrigatória"),
  confirmarSenha: yup.string().oneOf([yup.ref("senha")], "As senhas não coincidem").required("Confirme a senha"),
  cpf: yup.string().length(11, "CPF deve ter 11 dígitos").required("CPF obrigatório"),
  codigoPetSmart: yup.string().matches(/^\d{8}$/, "O código deve ter 8 dígitos numéricos").required("Código PetSmart obrigatório"),
});

export default function SignUpScreen() {
  const navigation = useNavigation();

  // Configuração do react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Função para processar o envio
  const onSubmit = (data: any) => {
    Alert.alert("Conta Criada!", `Bem-vindo, ${data.nome}!`);
  };

  return (
    <View style={styles.container}>
      
      {/* Logo */}
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      
      <Text style={styles.title}>Criar Conta</Text>

      {/* Nome */}
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={onChange} value={value} />
            {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>}
          </>
        )}
      />

      {/* E-mail */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" onChangeText={onChange} value={value} />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </>
        )}
      />

      {/* Senha */}
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput style={styles.input} placeholder="Criar Senha" secureTextEntry onChangeText={onChange} value={value} />
            {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>}
          </>
        )}
      />

      {/* Confirmar Senha */}
      <Controller
        control={control}
        name="confirmarSenha"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput style={styles.input} placeholder="Repetir Senha" secureTextEntry onChangeText={onChange} value={value} />
            {errors.confirmarSenha && <Text style={styles.error}>{errors.confirmarSenha.message}</Text>}
          </>
        )}
      />

      {/* CPF */}
      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput style={styles.input} placeholder="CPF" keyboardType="numeric" onChangeText={onChange} value={value} />
            {errors.cpf && <Text style={styles.error}>{errors.cpf.message}</Text>}
          </>
        )}
      />

      {/* Código PetSmart */}
      <Controller
        control={control}
        name="codigoPetSmart"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput style={styles.input} placeholder="Código PetSmart" keyboardType="numeric" onChangeText={onChange} value={value} />
            {errors.codigoPetSmart && <Text style={styles.error}>{errors.codigoPetSmart.message}</Text>}
          </>
        )}
      />

      {/* Botão Criar Conta */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      {/* Botão Voltar */}
      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar para Login</Text>
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
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#40a829",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  backButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
