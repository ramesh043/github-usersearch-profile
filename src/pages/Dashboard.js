import React from "react";
import { Info, Navbar, Search, User, Repos } from "../components";
import { GithubContext } from "../context/context";
import loadingImage from "../images/preloader.gif";
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar></Navbar>
        <Search></Search>
        <img src={loadingImage} alt="loadingImage" className="loading-img" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />

      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
