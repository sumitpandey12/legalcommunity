import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import {
  AiOutlineComment,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import LibraryItem from "../../Utils/LibraryPostCard";

const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Popular",
  },
  {
    id: 3,
    name: "Trending",
  },
  {
    id: 4,
    name: "New",
  },
  {
    id: 5,
    name: "Free",
  },
  {
    id: 6,
    name: "Paid",
  },
  {
    id: 7,
    name: "Top",
  },
  {
    id: 8,
    name: "New",
  },
  {
    id: 9,
    name: "Free",
  },
  {
    id: 10,
    name: "Paid",
  },
  {
    id: 8,
    name: "New",
  },
  {
    id: 9,
    name: "Free",
  },
  {
    id: 10,
    name: "Paid",
  },
];

const casesList = [
  {
    id: 1,
    userName: "Sumit Pandey",
    title: "LGBTQ Legal Code",
    profileURL:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    date: "11/11/2022",
    category: "Law",
    type: 1,
  },
  {
    id: 1,
    userName: "Sumit Pandey",
    title: "LGBTQ Legal Code",
    profileURL:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    date: "11/11/2022",
    category: "Law",
    type: 1,
  },
  {
    id: 1,
    userName: "Sumit Pandey",
    title: "LGBTQ Legal Code",
    profileURL:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    date: "11/11/2022",
    category: "Law",
    type: 1,
  },
  {
    id: 1,
    userName: "Sumit Pandey",
    title: "LGBTQ Legal Code",
    profileURL:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    date: "11/11/2022",
    category: "Law",
    type: 1,
  },
];

const Library = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(1);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleClick = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="px-4 pt-4">
      <TabMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="flex gap-4 overflow-x-auto my-4">
        {categories.map((category) => (
          <Chip
            key={category.id}
            selected={category.id === selectedCategory}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </Chip>
        ))}
      </div>
      <div>
        {casesList.map((item) => (
          <LibraryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const Chip = ({ children, selected, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={` rounded-full px-4 py-1 cursor-pointer ${
        selected ? "bg-orange-950 text-white" : "bg-orange-100 text-black"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const TabMenu = ({ selectedTab, setSelectedTab }) => {
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        color="secondary"
        value={selectedTab}
        onChange={handleChange}
        aria-label="secondary tabs example"
        textColor={"rgb(67 20 7)"}
        indicatorColor="secondary"
      >
        <Tab value={0} label="Previous Cases" />
        <Tab value={1} label="Rules/Regulations" />
      </Tabs>
    </Box>
  );
};

export default Library;
