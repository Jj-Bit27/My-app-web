// Las exportamos los iconos
import { BsGearFill } from "react-icons/bs";
import { IoChatbox } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaMoon, FaSun, FaSearch, FaHome, FaUpload } from "react-icons/fa";

// Exportamos funciones
import { NavLink } from "react-router-dom";
import useDarkMode from "./DarkMode";

// EL menu lateral de la aplicacion
const SideBar = () => {
  return (
    <div className="fixed top-52 left-4 h-[53%] w-16 flex flex-col bg-slate-300 shadow-lg rounded-3xl dark:bg-zinc-800">
      {/* icono de inicio */}
      <NavLink className="bg-transparent" to="/">
        <SideBarIcon
          icon={<FaHome size="20" className="bg-transparent" />}
          text="Inicio"
        />
      </NavLink>
      {/* icono de busqueda */}
      <NavLink className="bg-transparent" to="chat">
        <SideBarIcon
          icon={<FaSearch size="20" className="bg-transparent" />}
          text="Busqueda"
        />
      </NavLink>
      {/* icono de chat */}
      <NavLink className="bg-transparent" to="chat">
        <SideBarIcon
          icon={<IoChatbox size="20" className="bg-transparent" />}
          text="Chats"
        />
      </NavLink>
      <Divider />
      {/* icono de subir archivos */}
      <NavLink className="bg-transparent" to="/update-file">
        <SideBarIcon
          icon={<FaUpload size="20" className="bg-transparent" />}
          text="Subir"
        />
      </NavLink>
      <Divider />
      {/* icono de tema */}
      <ThemeIcon />
      {/* icono de configuracion */}
      <NavLink className="bg-transparent" to="settings">
        <SideBarIcon
          icon={<BsGearFill size="20" className="bg-transparent" />}
          text="Configuracion"
        />
      </NavLink>
      {/* icono de perfil */}
      <NavLink className="bg-transparent items-end" to="profile">
        <SideBarIcon
          icon={<IoPerson size="20" className="bg-transparent" />}
          text="Perfil"
        />
      </NavLink>
    </div>
  );
};

// El icono de cambio de tema
const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode} className="bg-transparent">
      {darkTheme ? (
        <SideBarIcon
          icon={<FaSun size="20" className="bg-transparent" />}
          text="Modo Claro"
        />
      ) : (
        <SideBarIcon
          icon={<FaMoon size="20" className="bg-transparent" />}
          text="Modo Oscuro"
        />
      )}
    </span>
  );
};

// Los iconos del menu lateral
const SideBarIcon = ({ icon, text }) => (
  <div
    className="relative group flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-transparent hover:bg-emerald-600 text-emerald-500 hover:text-white hover:rounded-xl rounded-3xl cursor-pointer transition-all duration-300 ease-linear
   dark:bg-zinc-800 dark:hover:bg-emerald-600"
  >
    {icon}
    <span
      className="absolute group-hover:scale-100 w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-black bg-slate-300 text-xs font-bold scale-0 origin-left transition-all duration-100
      dark:bg-zinc-800 dark:text-white"
    >
      {text}
    </span>
  </div>
);

// Divisor de los iconos
const Divider = () => (
  <hr className="bg-slate-400 border border-slate-400 dark:border-neutral-700 dark:bg-neutral-700 rounded-full mx-2" />
);

// Exportamos el menu lateral
export default SideBar;
