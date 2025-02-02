import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginModal from "./components/LoginModal";
import { useState } from "react";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(true);
  const [loginOrSignUp, setLoginOrSignUp] = useState("login");
  return (
    <>
      <Router>
        <LoginModal
          setLoginModalOpen={setLoginModalOpen}
          loginModalOpen={loginModalOpen}
          setLoginOrSignUp={setLoginOrSignUp}
          loginOrSignUp={loginOrSignUp}
        />
        <Routes>
          <Route
            path="/"
            element={<Home setLoginModalOpen={setLoginModalOpen} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
