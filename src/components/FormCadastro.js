import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default props => (
  <View style={styles.geral}>
    <View style={styles.inputes}>
      <TextInput placeholder="Nome" style={styles.inputesIn} />
      <TextInput placeholder="E-mail" style={styles.inputesIn} />
      <TextInput placeholder="Senha" style={styles.inputesIn} />
    </View>
    <View style={styles.button}>
      <Button title="Cadastrar" color="#115E54" onPress={() => false} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    padding: 10
  },
  inputes: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    flex: 1
  },
  inputesIn: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    fontSize: 18,
    height: 45
  }
});
