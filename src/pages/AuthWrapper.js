import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import loadingImage from "../images/Spinner-5.gif";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <img src={loadingImage} alt="" />
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
}
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  min-height: 100vh;
  img {
    width: 150px;
    background: transparent;
    border-radius: 50%;
  }
`;
export default AuthWrapper;
