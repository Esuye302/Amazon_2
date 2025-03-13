import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import { auth } from "../../Utility/fireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Compenents/DataProvider/DataProvider";
import { Types } from "../../Utility/actionType";
import { SyncLoader } from "react-spinners";

const Auth = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signup: false,
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const navStateData = useLocation();

  console.log("navstateData", navStateData);
  console.log("Navigating to:", navStateData?.state?.redirect || "/");

  const authHandler = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    let userInfo;
    try {
      if (e.target.name === "signin") {
        // console.log("Signing in...");
        setLoading({ ...loading, signin: true });
        userInfo = await signInWithEmailAndPassword(auth, email, password);
        // console.log("Signed in user:", userInfo);
      } else if (e.target.name === "signup") {
        // console.log("Signing up...");
        setLoading({ ...loading, signup: true });
        userInfo = await createUserWithEmailAndPassword(auth, email, password);
        // console.log("Signed up user:", userInfo);
      }

      dispatch({ type: Types.SET_USER, user: userInfo.user });
      // console.log("User dispatched:", userInfo.user);
      setError(""); // Clear error if successful
      navigate(navStateData?.state?.redirect || "/"); // Redirect after successful sign-in/signup
    } catch (err) {
      console.error("Error during sign-in/sign-up:", err);
      setError(err.message); // Show error message from Firebase
    } finally {
      setLoading({
        signin: false,
        signup: false,
      });
    }
  };

  return (
    <section className={classes.login}>
      <Link>
        <img src="./amazon-logo.png" alt="Amazon logo" />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign-In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData.state.msg}
          </small>
        )}
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className={classes.signin_btn}
            type="button"
            name="signin"
            onClick={authHandler}
          >
            {loading.signin ? (
              <SyncLoader size={8} color={"#fff"} />
            ) : (
              "Sign In"
            )}
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button
            type="button"
            name="signup"
            className={classes.signup_btn}
            onClick={authHandler}
          >
            {loading.signup ? (
              <SyncLoader size={8} color={"#fff"} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
        </form>

        {/* Render error message if there's an error */}
        {error && (
          <small style={{ color: "red", padding: "5px" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
