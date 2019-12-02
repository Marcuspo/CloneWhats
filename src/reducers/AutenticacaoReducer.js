const INITIAL_STATE = {
  nome: "Marcus",
  email: "marcusporama@gmail.com",
  senha: "12345"
};

export default (state = INITIAL_STATE, action) => {
  if (action.type == "modifica_email") {
    return {
      ...state,
      email: action.payload
    };
  }
  if (action.type == "modifica_senha") {
    return {
      ...state,
      senha: action.payload
    };
  }
  if (action.type == "modifica_nome") {
    return { ...state, nome: action.payload };
  }
  return state;
};
