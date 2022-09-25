import React, { useState } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { config } from "../../config";
import { useStateContext } from "../../contexts/contextProvider";

// TODO: Actually get User info... we only get accessToken.
function LoginPage() {
  const { isLoggedIn, setIsLoggedIn } = useStateContext();

  const onGoogleLoginSuccess = (response) => {
    console.log({ response });
    setIsLoggedIn(true);
  };

  const onGoogleLoginFailed = (err) => {
    console.log("Error when logging in: ", { err });
  };

  const login = useGoogleLogin({
    onSuccess: onGoogleLoginSuccess,
    onError: onGoogleLoginFailed,
    scope: ["https://www.googleapis.com/auth/userinfo.profile"],
  });

  const logout = () => {
    googleLogout();
    setIsLoggedIn(false);
  };

  return (
    <GoogleOAuthProvider clientId={config.MY_CLIENTID_TOKEN}>
      {!isLoggedIn ? (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      ) : (
        <button onClick={() => logout()}>Sign out with Google 🚀 </button>
      )}
    </GoogleOAuthProvider>
  );
}

export default LoginPage;
