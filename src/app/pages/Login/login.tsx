import { Button, Container, Divider, Link, TextField } from "@material-ui/core";
import GoogleIcon from "app/components/icons/google-icon";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { FormEvent, FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, LinkBox, MainButton, TitleLogin } from "./login-styles";

export interface ILoginProps {}

const Login: FunctionComponent<ILoginProps> = (_props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const signIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthing(true);
    const email: string = event.currentTarget["email"].value;
    const password: string = event.currentTarget["password"].value;
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch(() => {
        setAuthing(false);
      });
  };
  const signInWithGoogle = () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch(() => {
        setAuthing(false);
      });
  };

  return (
    <Container maxWidth="sm">
      <FormContainer component="form" onSubmit={signIn}>
        <TitleLogin variant="h3">Inicio de session</TitleLogin>
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
        <MainButton type="submit" disabled={authing}>
          Inicio de sesión
        </MainButton>
        <Divider />
        <Button
          variant="outlined"
          endIcon={<GoogleIcon />}
          onClick={signInWithGoogle}
          disabled={authing}
        >
          Inicio de sesión con
        </Button>
        <LinkBox>
        <Link>¿Se te olvido tu contraseña?</Link>
        <Link href="/register">¿No tienes una cuenta? Registrese</Link>
        </LinkBox>
      </FormContainer>
    </Container>
  );
};

export default Login;
