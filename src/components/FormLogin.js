import React from "React";
import { View, Text, TextInput, Button } from "react-native";

export default props => (
  <View>
    <View>
      <Text>Whatapp Clone</Text>
    </View>
    <View>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Senha" />
      <Text>Ainda não tem cadastro? Cadastre-se</Text>
    </View>
    <View>
      <Button title="Acessar" onPress={() => false} />
    </View>
  </View>
);
