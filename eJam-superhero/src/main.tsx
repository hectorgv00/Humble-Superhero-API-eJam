import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import PageContainer from "./components/PageContainer/PageContainer";
import Superhero from "./pages/Superhero/Superhero";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Header />
      <PageContainer>
        <Routes>
          <Route
            path="/superhero"
            element={<Superhero />}
          />
          <Route
            path="/"
            element={<Navigate to="/superhero" />}
          />
          <Route
            path="/*"
            element={<Navigate to="/superhero" />}
          />
        </Routes>
      </PageContainer>
    </Router>
  </StrictMode>
);
