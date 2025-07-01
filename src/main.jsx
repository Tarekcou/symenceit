// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import SmoothScroll from "./components/SmoothScroll";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <BrowserRouter>
      <SmoothScroll>
        <App />
        </SmoothScroll>
      </BrowserRouter>
  </StrictMode>
);
