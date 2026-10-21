import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import "./styles/tokens.css";
import "./styles/global.css";
import App from "./App"; // Por que el App se debe importar de ultimo?
createRoot(document.getElementById("root")).render(
    
    <React.StrictMode>
        <App />
    </React.StrictMode>
);