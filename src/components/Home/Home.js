import React from "react";
import TopFeed from "./TopFeed/TopFeed";
import Feed from "./Feed/Feed";

const Home = (props) => {
  return (
    <div className={`p-4 bg-white ${props.className}`}>
      <TopFeed />
      <Feed />
    </div>
  );
};

export default Home;
