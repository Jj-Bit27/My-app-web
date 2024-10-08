import React from "react";
import Categoria from "../components/Home/Categoria.jsx";

function Home() {
  return (
    <div className="h-dvh w-screen bg-slate-100 dark:bg-zinc-900">
      <Categoria text="Publicaciones" />
    </div>
  );
}

export default Home;
