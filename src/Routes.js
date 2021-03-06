import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import FormLogin from "./components/FormLogin";
import FormCadastro from "./components/FormCadastro";

export default props => (
  <Router>
    <Stack key="root">
      <Scene key="formLogin" component={FormLogin} hideNavBar />
      <Scene key="formCadastro" component={FormCadastro} />
    </Stack>
  </Router>
);
