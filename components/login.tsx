'use client'

import React, { useState } from "react";
import { useOkto, OktoContextType } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";

function LoginPage() {
const { authenticate } = useOkto() as OktoContextType;
const [authToken, setAuthToken] = useState(null);

const handleGoogleLogin = async (credentialResponse: { credential: any; }) => {
 const idToken = credentialResponse.credential;
  authenticate(idToken, (authResponse, error) => {
      if (authResponse) {
        setAuthToken(authResponse.auth_token);
        console.log("Authenticated successfully, auth token:", authResponse.auth_token);
      } else if (error) {
            console.error("Authentication error:", error);
        }
    });
 };

 return (
    <div>
        <h1>Login</h1>
        {!authToken ? (
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                if (credentialResponse.credential) {
                    handleGoogleLogin({ credential: credentialResponse.credential });
                } else {
                    console.error("Login Failed: No credential provided");
                }
            }}
            onError={() => console.error("Login Failed")}
        />
        ) : (
            <p>Authenticated</p>
        )}
    </div>
    );
}

export default LoginPage;