import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import AutenticacaoReducer from "../reducers/AutenticacaoReducer";
import { connect } from "react-redux";

const FormCadastro = props => (
  <View style={styles.geral}>
    <View style={styles.inputes}>
      <TextInput
        value={props.nome}
        placeholder="Nome"
        style={styles.inputesIn}
      />
      <TextInput
        value={props.email}
        placeholder="E-mail"
        style={styles.inputesIn}
      />
      <TextInput
        value={props.senha}
        placeholder="Senha"
        style={styles.inputesIn}
      />
    </View>
    <View style={styles.button}>
      <Button title="Cadastrar" color="#115E54" onPress={() => false} />
    </View>
  </View>
);

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

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

export default connect(
  mapStateToProps,
  null
)(FormCadastro);
