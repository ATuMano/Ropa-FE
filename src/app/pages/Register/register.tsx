import { TextField } from "@material-ui/core";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile
} from "firebase/auth";
import React, { FormEvent, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthorizationContainer,
  FormBox,
  MainButton,
  Title
} from "styles/global-styles";

export interface IRegisterProps {}

const Register: FunctionComponent<IRegisterProps> = _props => {
  const navigate = useNavigate();
  const auth = getAuth();
  const signUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email: string = event.currentTarget["email"].value;
    const firstName: string = event.currentTarget["firstName"].value;
    const lastName: string = event.currentTarget["lastName"].value;
    const password: string = event.currentTarget["password"].value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(async response => {
        console.log(response.user);
        await updateProfile(response.user, {
          displayName: `${firstName} ${lastName}`
        });
        navigate(-2);
      })
      .catch(() => {});
  };
  return (
    <AuthorizationContainer maxWidth="sm">
      <FormBox component="form" onSubmit={signUp}>
        <Title variant="h3">Registrate</Title>
        <TextField
          required
          name="firstName"
          label="Nombre"
          variant="outlined"
        />
        <TextField
          required
          name="lastName"
          label="Apellido"
          variant="outlined"
        />
        <TextField
          required
          name="email"
          label="Direccion de correo"
          variant="outlined"
        />
        <TextField
          required
          name="password"
          type="password"
          label="Contraseña"
          variant="outlined"
        />
        <MainButton type="submit">Registrarse</MainButton>
      </FormBox>
    </AuthorizationContainer>
  );
};

export default Register;
