import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ILoginProps {}

const Login: FunctionComponent<ILoginProps> = (_props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const signInWithGoogle = () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div>
      <p>Login Page</p>
      <button onClick={signInWithGoogle} disabled={authing}>
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
