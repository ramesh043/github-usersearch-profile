import React, { useEffect, useState } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
const url = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`${url}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(`${url}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((results) => {
        const [githubRepos, githubFollowers] = results;
        const status = "fulfilled";
        if (githubRepos.status === status) {
          setGithubRepos(githubRepos.value.data);
        }
        if (githubFollowers.status === status) {
          setGithubFollowers(githubFollowers.value.data);
        }
      });
    } else {
      toggleError(true, "there is no user");
      setIsLoading(true);
    }
    checkRequest();
    setIsLoading(false);
  };
  const checkRequest = () => {
    axios(`${url}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        // remaining = 0;
        setRequests(remaining);
        if (remaining === 0) {
          // toggleError(true, "Sorry you have Exceed Hourly Late Limit");
        }
      })
      .catch((err) => console.log(err));
  };
  function toggleError(show = true, msg = "") {
    setError({ show, msg });
  }

  // Loding
  useEffect(() => {
    checkRequest();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        githubRepos,
        githubFollowers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
