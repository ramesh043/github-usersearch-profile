import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4>
          Welcome👋,<strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      {isUser ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="logout"
        >
          Log Out
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  padding: 0.6rem;
  margin-bottom: 4rem;
  background-color: white;
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto auto;
  gap: 1.5rem;
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  h4 {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1rem;
  }
  .logout {
    /* padding: 1rem; */
    /* background-color: red;
     */
    background: #387adf;
    color: #fff;
    border-radius: 5px;
    font-weight: 590;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.34rem 1.74rem;
    transition: all 0.6s ease-in-out;
  }
  &:hover > .logout {
    background: #00a9ff;
    color: #fff;
    opacity: 0.9;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
    /* font-weight: bold; */
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
    /* letter-spacing: var(--spacing); */
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;
export default Navbar;
