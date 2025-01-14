import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGitMerge } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

function Info() {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;
  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "Repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGitMerge className="icon" />,
      label: "gists",
      value: public_gists,
      color: "pink",
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </Wrapper>
    </section>
  );
}

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    background: #fff;
    padding: 1rem 2rem;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;
export default Info;
