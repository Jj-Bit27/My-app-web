import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import NavTop from "./components/Sidebar/NavTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <NavTop />
      <Sidebar />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
