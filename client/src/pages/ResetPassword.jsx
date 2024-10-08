import { useState } from "react";
import { useAuth } from "../libs/userAuth";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import CardResetPassword from "../components/Cards/CardResetPassword";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, errorResetPassword, isLoading, messageResetPassword } =
    useAuth();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await resetPassword(token, password);

      toast.success(
        "Password reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error resetting password");
    }
  };

  return (
    <section className="h-screen w-screen flex content-center items-center justify-center bg-slate-100 dark:bg-zinc-900">
      <CardResetPassword
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        error={errorResetPassword}
        message={messageResetPassword}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};
export default ResetPasswordPage;
