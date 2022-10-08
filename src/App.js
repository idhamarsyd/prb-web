import "./App.css";
import Home from "./pages/Home";
import { Form } from "./pages/Form";
import { Login } from "./pages/Login";
import { Patient } from "./pages/Patient";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { isAuth } = useSelector((state) => state.login);
  const { detailID } = useSelector((state) => state.patient);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuth}>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/form"
          element={
            <ProtectedRoute isAuthenticated={isAuth}>
              <Form />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/new-patient" element={<Form />} />
        <Route path={`/patient/${detailID}`} element={<Patient />} />
      </Routes>
    </div>
  );
}

export default App;
