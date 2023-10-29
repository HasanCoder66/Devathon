import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { getAuth, createUserWithEmailAndPassword ,   } from "../../firebase/config.js";

function Signup() {
  const auth = getAuth(); 
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const cPassword = useRef();


  const signupHandler = () => {
    console.log("signupHandler")
    createUserWithEmailAndPassword(auth, email?.current?.value , password?.current?.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      if(user){
        window.location.href = '/login'
      }
      else{
        alert('NHi jasakty agay ')
      }
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
          <div className="loginBox">
            <input 
            placeholder="UserName" 
            type="text" 
            className="loginInput" 
            ref={userName}
            />
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
            <input
              placeholder="Confirm Password "
              type="password"
              className="loginInput"
              ref={cPassword}
            />

            <button onClick={signupHandler} className="loginButton"> Sign Up</button>
            <Link to={"/login"}>
              <button className="loginRegisterButton">
                Login into Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
