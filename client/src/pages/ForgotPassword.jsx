import { useState } from "react";
import { useAuth } from "../libs/userAuth.js";
import CardForgotPassword from "../components/Cards/CardForgotPassword";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    isLoading,
    forgotPassword,
    errorForgotPassword,
    messageForgotPassword,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <section className="h-screen w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <CardForgotPassword
        email={email}
        setEmail={setEmail}
        isSubmitted={isSubmitted}
        isLoading={isLoading}
        error={errorForgotPassword}
        message={messageForgotPassword}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};
export default ForgotPasswordPage;
