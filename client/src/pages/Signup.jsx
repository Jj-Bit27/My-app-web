import React from "react";
import FormRegister from "../components/Access/FormSignup.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../libs/userAuth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, errorSignup, isLoading } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name);
      navigate("/auth/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-dvh w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <FormRegister
        handleSignup={handleSignUp}
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        error={errorSignup}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Register;
