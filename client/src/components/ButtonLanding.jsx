import { Link } from "react-router-dom";

function ButtonLanding() {
  return (
    <div className="flex flex-wrap flex-row justify-center text-white bg-transparent py-3">
      <Link
        to="/auth/login"
        className="bg-stone-800 p-4 m-5 rounded-br-lg rounded-tl-lg text-xl hover:bg-emerald-600 cursor-pointer transition-all duration-300 ease-linear 
        dark:bg-slate-300 dark:text-black dark:hover:bg-emerald-600 dark:hover:text-white dark:transition-all dark:duration-300"
      >
        Iniciar sesión
      </Link>
      <Link
        to="/auth/signup"
        className="bg-stone-800 p-4 m-5 rounded-br-lg rounded-tl-lg text-xl hover:bg-emerald-600 cursor-pointer transition-all duration-300 ease-linear
        dark:bg-slate-300 dark:text-black dark:hover:bg-emerald-600 dark:hover:text-white dark:transition-all dark:duration-300"
      >
        Registrarse
      </Link>
    </div>
  );
}

export default ButtonLanding;
