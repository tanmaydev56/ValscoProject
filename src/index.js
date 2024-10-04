import "./index.css";

import App from "./App";
import { AppProvider } from "./Context/BlogContext";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <React.StrictMode>
      <HelmetProvider>
        <App />
        <Toaster />
      </HelmetProvider>
    </React.StrictMode>
  </AppProvider>
);
