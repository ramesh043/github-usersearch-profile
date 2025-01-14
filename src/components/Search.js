import React, { useState } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { MdSearch } from "react-icons/md";

function Search() {
  const [user, setUser] = useState("");
  const { requests, error, searchGithubUser, isLoading } =
    React.useContext(GithubContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
      setUser("");
    }
  };
  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="search"
              placeholder="enter github username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && <button type="submit">search</button>}
            {/* <button type="button">search</button> */}
          </div>
        </form>
        <h3>Requests:{requests}/60</h3>
      </Wrapper>
    </section>
  );
}
const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }

  .form-control {
    background-color: white;
    align-items: center;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    input {
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
    }
    input::placeholder {
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      color: var(--clr-grey-3);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }
    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
