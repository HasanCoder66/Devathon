import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "../../firebase/config.js";
import { useRef } from "react";

export default function Login() {
  const auth = getAuth();
  const email = useRef();
  const password = useRef();

  const loginHandler = () => {
    console.log("login handler")
    signInWithEmailAndPassword(
      auth,
      email?.current?.value,
      password?.current?.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
            console.log(user)
            if(user) {
              window.location.href= '/home'
            }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email Address"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder=" Password"
              type="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" onClick={loginHandler}>
              {" "}
              Log In
            </button>
            <span className="loginForgot">Forgot Password</span>
            <Link to={"/signup"}>
              <button className="loginRegisterButton">
                Create a new Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
