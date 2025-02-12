import Home from "./pages/Home";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LoginModal from "./components/LoginModal";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db, app } from "./firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import ForYou from "./pages/ForYou";
import Navbar from "./components/Navbar";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import Book from "./pages/Book";
import Player from "./pages/Player";
import ChoosePlan from "./pages/ChoosePlan";
import { getCheckoutUrl, getPortalUrl } from "../src/stripePayment.js";
import {
  getPremiumStatus,
  getSubscriptionName,
} from "../src/getPremiumStatus.js";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginOrSignUp, setLoginOrSignUp] = useState("login");
  const [user, setUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [navActiveLink, setNavActiveLink] = useState("for-you");
  const [hideNavBar, setHideNavBar] = useState(false);
  const [playerFontSize, setPlayerFontSize] = useState("16");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [userSubscriptionStatus, setUserSubscriptionStatus] = useState(false);
  const [userSubscriptionName, setUserSubscriptionName] = useState(false);
  const [signedInAsGuest, setIsSignedInAsGuest] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
        setIsSignedIn(true);
      }
    });
  }, []);

  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      const subscriptionStatus = auth.currentUser
        ? await getPremiumStatus(app)
        : false;
      setUserSubscriptionStatus(subscriptionStatus);
    };
    checkSubscriptionStatus();
  }, [app, auth.currentUser?.uid]);

  useEffect(() => {
    if (userSubscriptionStatus == true) {
      getSubscriptionName(app).then((value) => {
        setUserSubscriptionName(value);
      });
    }
  }, [app, auth.currentUser?.uid, userSubscriptionStatus]);

  const registerUserWithEmail = (e, email, password) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setUser(data.user);
        setIsSignedIn(true);
        console.log(data.user);
        setLoginModalOpen(false);
        setDoc(doc(db, "users", data.user.uid), {
          email: data.user.email,
          uid: data.user.uid,
          subscription: "Basic",
        });
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
        setIsSignedInAsGuest(true);
        setLoginModalOpen(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logout = () => {
    signOut(auth);
    setUser({});
    setUserSubscriptionStatus(false);
    setUserSubscriptionName(false);
    setIsSignedInAsGuest(false);
    setIsSignedIn(false);
  };

  /* FireStore Library */

  function addBookToLibrary(id) {
    setDoc(doc(db, "users", user.uid, "library", id), {
      bookId: id,
    });
  }

  async function isBookInLibrary(id) {
    const bookRef = doc(db, "users", user.uid, "library", id);
    const bookSnap = await getDoc(bookRef);
    if (bookSnap.exists()) {
      return true;
    } else {
      return false;
    }
  }

  function removeBookFromLibrary(id) {
    const bookRef = doc(db, "users", user.uid, "library", id);
    deleteDoc(bookRef);
  }

  async function getAllBooksInLibrary() {
    const { docs } = await getDocs(
      collection(db, "users", user.uid, "library")
    );
    const books = docs.map((elem) => elem.data());
    return books;
  }

  /* Stripe */

  const upgradeToPremiumPlus = async () => {
    setLoading(true);
    const priceId = "price_1QrQteI3MRe4FcEwETxWnN34";
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    window.location.href = checkoutUrl;
    console.log("upgrade to premium");
    setLoading(false);
  };

  const upgradeToPremium = async () => {
    setLoading(true);
    const priceId = "price_1QrUG0I3MRe4FcEwjtgffLSf";
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    window.location.href = checkoutUrl;
    console.log("upgrade to premium");
    setLoading(false);
  };

  const manageSubscription = async () => {
    const portalUrl = await getPortalUrl(app);
    window.location.href = portalUrl;
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
                setHideNavBar={setHideNavBar}
                userSubscriptionStatus={userSubscriptionStatus}
              />
            }
          />
          <Route
            path="/library"
            element={
              <Library
                setNavActiveLink={setNavActiveLink}
                setMobileNavOpen={setMobileNavOpen}
                addBookToLibrary={addBookToLibrary}
                getAllBooksInLibrary={getAllBooksInLibrary}
                user={user}
                isSignedIn={isSignedIn}
                setLoginModalOpen={setLoginModalOpen}
                userSubscriptionStatus={userSubscriptionStatus}
                signedInAsGuest={signedInAsGuest}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                setNavActiveLink={setNavActiveLink}
                user={user}
                isSignedIn={isSignedIn}
                setLoginModalOpen={setLoginModalOpen}
                setMobileNavOpen={setMobileNavOpen}
                userSubscriptionName={userSubscriptionName}
                userSubscriptionStatus={userSubscriptionStatus}
                setHideNavBar={setHideNavBar}
                manageSubscription={manageSubscription}
                signedInAsGuest={signedInAsGuest}
              />
            }
          />
          <Route
            path="/book/:id"
            element={
              <Book
                setNavActiveLink={setNavActiveLink}
                setMobileNavOpen={setMobileNavOpen}
                addBookToLibrary={addBookToLibrary}
                isBookInLibrary={isBookInLibrary}
                user={user}
                removeBookFromLibrary={removeBookFromLibrary}
                isSignedIn={isSignedIn}
                userSubscriptionStatus={userSubscriptionStatus}
                setLoginModalOpen={setLoginModalOpen}
                setHideNavBar={setHideNavBar}
                
              />
            }
          />
          <Route
            path="/player/:id"
            element={
              <Player
                setNavActiveLink={setNavActiveLink}
                playerFontSize={playerFontSize}
                setMobileNavOpen={setMobileNavOpen}
              />
            }
          />
          <Route
            path="/choose-plan"
            element={
              <ChoosePlan
                setHideNavBar={setHideNavBar}
                upgradeToPremiumPlus={upgradeToPremiumPlus}
                upgradeToPremium={upgradeToPremium}
                loading={loading}
                userSubscriptionStatus={userSubscriptionStatus}
                isSignedIn={isSignedIn}
                signedInAsGuest={signedInAsGuest}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
