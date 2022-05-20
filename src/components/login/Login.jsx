import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, Provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const singIn = async () => {
    await signInWithPopup(auth, Provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="whatsapp logo"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={singIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};
export default Login;
