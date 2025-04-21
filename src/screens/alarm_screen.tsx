import React, { useState } from "react";
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Modal, TextInput, Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { StackParamList } from "../../App";

type AlarmScreenNavigationProp = StackNavigationProp<StackParamList, "Alarm">;

const AlarmScreen = () => {
  const navigation = useNavigation<AlarmScreenNavigationProp>();

  const [alarmes, setAlarmes] = useState([
    { id: "1", horario: "08:00", descricao: "Tomar remédio" },
    { id: "2", horario: "12:00", descricao: "Alimentar o pet" },
    { id: "3", horario: "18:30", descricao: "Passear com o pet" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [novaDescricao, setNovaDescricao] = useState("");
  const [horaSelecionada, setHoraSelecionada] = useState("00");
  const [minutoSelecionado, setMinutoSelecionado] = useState("00");

  const adicionarAlarme = () => {
    if (novaDescricao) {
      const novoId = (alarmes.length + 1).toString();
      const horario = `${horaSelecionada.padStart(2, "0")}:${minutoSelecionado.padStart(2, "0")}`;
      const novoAlarme = {
        id: novoId,
        horario,
        descricao: novaDescricao,
      };
      setAlarmes([...alarmes, novoAlarme]);
      setNovaDescricao("");
      setHoraSelecionada("00");
      setMinutoSelecionado("00");
      setModalVisible(false);
    }
  };

  const renderPickerItems = (max: number) =>
    Array.from({ length: max }, (_, i) => {
      const value = i.toString().padStart(2, "0");
      return <Picker.Item key={value} label={value} value={value} />;
    });

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Image source={require("../assets/images/alarm_inside.png")} style={styles.alarmImage} />

      <Text style={styles.title}>Alarmes</Text>

      <FlatList
        data={alarmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.horario}>{item.horario}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>+ Adicionar Alarme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      {/* Modal para novo alarme */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Alarme</Text>

            <TextInput
              placeholder="Descrição"
              style={styles.input}
              value={novaDescricao}
              onChangeText={setNovaDescricao}
            />

            <Text style={styles.label}>Horário</Text>
            <View style={styles.pickerRow}>
              <Picker
                selectedValue={horaSelecionada}
                onValueChange={(itemValue) => setHoraSelecionada(itemValue)}
                style={styles.picker}
              >
                {renderPickerItems(24)}
              </Picker>
              <Text style={styles.pickerSeparator}>:</Text>
              <Picker
                selectedValue={minutoSelecionado}
                onValueChange={(itemValue) => setMinutoSelecionado(itemValue)}
                style={styles.picker}
              >
                {renderPickerItems(60)}
              </Picker>
            </View>

            <TouchableOpacity style={styles.modalButton} onPress={adicionarAlarme}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "gray" }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##d4edda",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 75,
    marginBottom: 20,
  },
  alarmImage: {
    width: 150,
    height: 110,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    elevation: 1,
  },
  horario: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#888",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  pickerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  picker: {
    width: Platform.OS === "android" ? 100 : undefined,
  },
  pickerSeparator: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  modalButton: {
    width: "100%",
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
});

export default AlarmScreen;
