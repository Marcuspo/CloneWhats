import React from "React";
import { View, Text, Button, StyleSheet, Image } from "react-native";
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

import logo from "../images/logo.png";

export default props => (
  <Container>
    <Header androidStatusBarColor="#115E54" style={styles.header}>
      <Left />
      <Body>
        <Title>WhatsApp Clone</Title>
      </Body>
    </Header>
    <View style={styles.geral}>
      <View style={styles.topoNome}>
        <Image
          source={logo}
          style={{ marginTop: 15, height: 150, width: 150 }}
        />
      </View>
      <View style={styles.inputes}>
        <Item>
          <Icon name="email" type="MaterialCommunityIcons" />
          <Input
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
            style={styles.styleInput}
            returnKeyType="done"
            placeholder="Senha"
          />
        </Item>
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
  </Container>
);

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
