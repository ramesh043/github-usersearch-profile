import React from "react";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./charts";
import styled from "styled-components";

function Repos() {
  const { githubRepos } = React.useContext(GithubContext);
  const chartData = [
    {
      label: "Html",
      value: "10%",
    },
    {
      label: "CSS",
      value: "40",
    },
    {
      label: "JavaScript",
      value: "40",
    },

    {
      label: "ReactJS",
      value: "30",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={chartData} />

        <Column3D data={chartData} />

        <Doughnut2D data={chartData} />
        <Bar3D data={chartData} />
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
`;

export default Repos;
