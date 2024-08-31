import React from "react";
import "./TopFeed.css";
import TopFeedItem from "./TopFeedItem";

const imageURL =
  "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const TopFeed = () => {
  return (
    <div className="flex hide-scrollbar overflow-x-scroll space-x-4 p-4 rounded-lg">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
        (item, index) => (
          <TopFeedItem key={index} imageURL={imageURL} index={index} />
        )
      )}
    </div>
  );
};

export default TopFeed;
