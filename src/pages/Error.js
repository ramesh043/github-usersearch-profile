import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Error() {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h2>Sorry The Page can't be found</h2>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h2 {
    margin-bottom: 1.5rem;
    color: var(--clr-grey-3);
  }
`;
export default Error;
