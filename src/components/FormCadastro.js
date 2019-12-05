import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import {
  modificaEmail,
  modificaSenha,
  modificaNome
} from "../actions/AutenticacaoActions";
import AutenticacaoReducer from "../reducers/AutenticacaoReducer";
import { connect } from "react-redux";

class FormCadastro extends Component {
  render() {
    return (
  <View style={styles.geral}>
    <View style={styles.inputes}>
      <TextInput
        value={this.props.nome}
        placeholder="Nome"
        style={styles.inputesIn}
        onChangeText={texto => this.props.modificaNome(texto)}
        placeholderTextColor="green"
      />
      <TextInput
        value={this.props.email}
        placeholder="E-mail"
        style={styles.inputesIn}
        onChangeText={texto => this.props.modificaEmail(texto)}
        placeholderTextColor="green"
      />
      <TextInput
        value={this.props.senha}
        placeholder="Senha"
        style={styles.inputesIn}
        onChangeText={texto => this.props.modificaSenha(texto)}
        secureTextEntry
        placeholderTextColor="green"
      />
    </View>
    <View style={styles.button}>
      <Button title="Cadastrar" color="#115E54" onPress={() => false} />
    </View>
  </View>
    );
  }
}


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
    height: 45,
    color: "green"
  }
});

export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  modificaNome
})(FormCadastro);
