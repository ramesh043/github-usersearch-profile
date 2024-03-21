import React from "react";
import styled from "styled-components";
import loginImage from "../images/login-img.svg";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImage} alt="loginImage" />
        <h2>Github User</h2>
        <button to="/" className="btn" onClick={loginWithRedirect}>
          Login/signup
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2.5rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
`;

export default Login;
