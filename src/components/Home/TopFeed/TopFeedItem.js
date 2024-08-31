import React from "react";

const TopFeedItem = ({ imageURL, index }) => {
  return (
    <div key={index} className="relative w-72 h-54 flex-shrink-0 rounded-lg">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={imageURL}
        alt={`image ${index + 1}`}
      />
      <div className="absolute w-full bottom-0 top-5 left-0 z-10 bg-gradient-to-t from-black px-2 py-1 flex flex-col rounded-b-lg justify-end">
        <span className="text-white text-lg font-bold">This is Heading</span>
        <span className="text-white text-sm">This is Sub-Heading</span>
      </div>
    </div>
  );
};

export default TopFeedItem;
