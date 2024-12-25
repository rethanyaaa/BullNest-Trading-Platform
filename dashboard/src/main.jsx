import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Signup from "./components/signup/Signup";
import DataProvider from "./components/context/DataProvider";
import { useState } from "react";

// PrivateRoute component to check authentication
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/signup" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* Signup page */}
          <Route
            path="/signup"
            element={<Signup setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Home page, protected by PrivateRoute */}
          <Route
            path="/*"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

createRoot(document.getElementById("root")).render(<App />);
