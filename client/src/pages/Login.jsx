import React from "react";
import FormLogin from "../components/Access/FormLogin.jsx";
import { useState } from "react";
import { useAuth } from "../libs/userAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, errorLogin } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <section className="h-screen w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <FormLogin
        setEmail={setEmail}
        setPassword={setPassword}
        isLoading={isLoading}
        error={errorLogin}
        email={email}
        handleLogin={handleLogin}
      />
    </section>
  );
}

export default Login;
