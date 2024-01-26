import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import {  Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user,error, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CheeseCake</h3>
          <span className="loginDesc">
            Have Fun with CheeseCake application.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" className="loginInput" ref={email}/>
            <input placeholder="Password" type="password" className="loginInput" required minLength="5" ref={password}/>
            <button className="loginButton" disabled={isFetching}>
              {isFetching ?(<CircularProgress  size="20px" />) : ( "Log In")}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" style={{ textDecoration: "none"}}>
              <button className="loginRegisterButton">Create account</button>
             </Link>  
          
          </form>
        </div>
      </div>
    </div>
  );
}
