import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginModal from "./components/LoginModal";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import ForYou from "./pages/ForYou";
import Navbar from "./components/Navbar";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import Book from "./pages/Book";
import Player from "./pages/Player";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginOrSignUp, setLoginOrSignUp] = useState("login");
  const [user, setUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [navActiveLink, setNavActiveLink] = useState("for-you");
  const [hideNavBar, setHideNavBar] = useState(false);
  const [playerFontSize, setPlayerFontSize] = useState('16')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
        setIsSignedIn(true);
      }
    });
  }, []);

  const registerUserWithEmail = (e, email, password) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setUser(data.user);
        setIsSignedIn(true);
        console.log(data.user);
        setLoginModalOpen(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const loginUserWithEmail = (e, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setUser(data.user);
        setIsSignedIn(true);
        console.log(data.user);
        setLoginModalOpen(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signInAsGuest = () => {
    signInAnonymously(auth)
      .then((data) => {
        setUser(data.user);
        setIsSignedIn(true);
        console.log(data.user);
        setLoginModalOpen(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logout = () => {
    signOut(auth);
    setUser({});
    setIsSignedIn(false);
  };

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Navbar
          hideNavBar={hideNavBar}
          logout={logout}
          navActiveLink={navActiveLink}
          isSignedIn={isSignedIn}
          setLoginModalOpen={setLoginModalOpen}
          setPlayerFontSize={setPlayerFontSize}
          playerFontSize={playerFontSize}
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
        <LoginModal
          setLoginModalOpen={setLoginModalOpen}
          loginModalOpen={loginModalOpen}
          setLoginOrSignUp={setLoginOrSignUp}
          loginOrSignUp={loginOrSignUp}
          registerUserWithEmail={registerUserWithEmail}
          loginUserWithEmail={loginUserWithEmail}
          signInAsGuest={signInAsGuest}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setLoginModalOpen={setLoginModalOpen}
                isSignedIn={isSignedIn}
                setHideNavBar={setHideNavBar}
              />
            }
          />
          <Route
            path="/for-you"
            element={
              <ForYou
                user={user}
                logout={logout}
                setNavActiveLink={setNavActiveLink}
                isSignedIn={isSignedIn}
                setMobileNavOpen={setMobileNavOpen}
                mobileNavOpen={mobileNavOpen}
              />
            }
          />
          <Route
            path="/library"
            element={<Library setNavActiveLink={setNavActiveLink} />}
          />
          <Route
            path="/settings"
            element={<Settings setNavActiveLink={setNavActiveLink} user={user} isSignedIn={isSignedIn} setLoginModalOpen={setLoginModalOpen} setMobileNavOpen={setMobileNavOpen}/>}
          />
          <Route path="/book/:id" element={<Book setNavActiveLink={setNavActiveLink} setMobileNavOpen={setMobileNavOpen}/>} />
          <Route path="/player/:id" element={<Player setNavActiveLink={setNavActiveLink} playerFontSize={playerFontSize} setMobileNavOpen={setMobileNavOpen}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
