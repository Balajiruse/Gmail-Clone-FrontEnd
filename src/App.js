import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "./Components/Authentication";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Authentication />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate replace to="/signin" />} />
      </Routes>
    </>
  );
}

export default App;