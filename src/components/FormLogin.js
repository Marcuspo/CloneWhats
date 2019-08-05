import React, { Fragment } from "React";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default props => (
  <View style={styles.geral}>
    <View style={styles.topoNome}>
      <Text style={styles.nameStyle}>Whatapp Clone</Text>
    </View>
    <View style={styles.inputes}>
      <TextInput
        style={styles.styleInput}
        keyboardType="email-address"
        placeholder="E-mail"
      />
    </View>
    <View style={{ flex: 2, paddingTop: 15 }}>
      <TextInput
        style={styles.styleInput}
        returnKeyType="done"
        placeholder="Senha"
      />
      <View style={styles.topoNome}>
        <Text style={styles.styleCadastro}>
          Ainda não tem cadastro? Cadastre-se
        </Text>
      </View>
    </View>
    <View style={{ flex: 2 }}>
      <Button title="Acessar" color="#115E54" onPress={() => false} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    padding: 10
  },
  topoNome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  nameStyle: {
    color: "#115E54",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold"
  },
  styleInput: {
    fontSize: 20,
    height: 45,
    borderColor: "#115E54",
    borderWidth: 1
  },
  styleCadastro: {
    fontSize: 15,
    height: 45,
    fontStyle: "italic",
    fontWeight: "bold"
  }
});
