import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-dvh w-screen text-center content-center bg-slate-100 dark:bg-zinc-900">
      <h1 className="text-6xl font-bold dark:text-white">404</h1>
      <h3 className="text-3xl font-bold my-3 mb-6 dark:text-white">
        Pagina No Encontrada
      </h3>
      <NavLink
        to="/"
        className="text-xl font-bold bg-slate-300 p-4 gap-3 rounded-md hover:bg-emerald-600 transition-all duration-300 
        dark:text-white dark:bg-zinc-800 dark:hover:bg-emerald-600 dark:hover:text-white dark:transition-all dark:duration-300"
      >
        Volver
      </NavLink>
    </div>
  );
}

export default NotFound;
