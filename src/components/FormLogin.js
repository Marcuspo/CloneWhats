import React from "React";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Body,
  Title,
  Header,
  Container,
  Left,
  Icon,
  Input,
  Item
} from "native-base";
import AutenticacaoReducer from "../reducers/AutenticacaoReducer";
import { connect } from "react-redux";
import { modificaEmail } from "../actions/AutenticacaoActions";

const FormLogin = props => (
  <Container>
    <Header androidStatusBarColor="#115E54" style={styles.header}>
      <Left />
      <Body>
        <Title>WhatsApp Clone</Title>
      </Body>
    </Header>
    <View style={styles.geral}>
      <View style={styles.topoNome} />
      <View style={styles.inputes}>
        <Item>
          <Icon name="email" type="MaterialCommunityIcons" />
          <Input
            onChangeText={texto => props.modificaEmail(texto)}
            value={props.email}
            style={styles.styleInput}
            keyboardType="email-address"
            placeholder="E-mail"
          />
        </Item>
      </View>
      <View style={{ flex: 2, paddingTop: 15 }}>
        <Item>
          <Icon name="textbox-password" type="MaterialCommunityIcons" />
          <Input
            value={props.senha}
            style={styles.styleInput}
            returnKeyType="done"
            placeholder="Senha"
          />
        </Item>
        <View style={styles.topoNome}>
          <TouchableHighlight onPress={() => Actions.formCadastro()}>
            <Text style={styles.styleCadastro}>
              Ainda não tem cadastro? Cadastre-se aqui
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Button title="Acessar" color="#115E54" onPress={() => false} />
      </View>
    </View>
  </Container>
);

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

const styles = StyleSheet.create({
  header: {
    color: "#115E54",
    backgroundColor: "#115E54"
  },
  geral: {
    flex: 1,
    padding: 10
  },
  topoNome: {
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
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    marginTop: 25
  },
  styleCadastro: {
    fontSize: 15,
    height: 45,
    fontStyle: "italic",
    fontWeight: "bold"
  },
  inputes: {
    marginTop: 45
  }
});

export default connect(
  mapStateToProps,
  { modificaEmail }
)(FormLogin);
