import { Button, Divider, TextField } from "@material-ui/core";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { FormEvent, FunctionComponent } from "react";
import {
  AuthorizationContainer,
  FormBox,
  MainButton,
  Title
} from "styles/global-styles";
import { getURIOrigin } from "utils/route-utils";

export interface IForgotPasswordProps {}

const ForgotPassword: FunctionComponent<IForgotPasswordProps> = _props => {
  const auth = getAuth();
  auth.useDeviceLanguage();
  const loginURL = getURIOrigin() + "/login";
  const forgotPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email: string = event.currentTarget["email"].value;
    sendPasswordResetEmail(auth, email, { url: loginURL })
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AuthorizationContainer maxWidth="sm">
      <FormBox component="form" onSubmit={forgotPassword}>
        <Title variant="h3">Olvide mi Contraseña</Title>
        <TextField
          required
          name="email"
          label="Direccion de correo"
          variant="outlined"
        />
        <MainButton type="submit">Enviar Email</MainButton>
        <Divider />
        <Button variant="outlined" href="/login">
          Iniciar Session
        </Button>
      </FormBox>
    </AuthorizationContainer>
  );
};

export default ForgotPassword;
