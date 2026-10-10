import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./routes/index";
import NotesPage from "./routes/notes";
import "./styles.css";

const page = window.location.pathname.replace(/\/$/, "") || "/";
const App = page === "/notes" ? NotesPage : HomePage;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
