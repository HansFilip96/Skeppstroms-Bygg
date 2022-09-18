import React from "react";
import { GoogleLogin, useGoogleLogin, googleLogout } from "@react-oauth/google";

const LoginPage = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const logout = googleLogout();
  return (
    <div>
      {!login ? (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      ) : (
        <button onClick={() => logout()}>Sign out with Google 🚀 </button>
      )}
    </div>
  );
};

export default LoginPage;
