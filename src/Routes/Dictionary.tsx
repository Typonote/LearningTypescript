import React from "react";
import SearchBar from "../Component/Dictionary/SearchBar";
import DictTopSection from "../Component/Dictionary/DictTopSection";
import Dummy2 from "../Sample/Dummy2";

const Dictionary = () => {
  return (
    <div style={{ width: "80%" }}>
      <DictTopSection />
      <SearchBar data={Dummy2} />
    </div>
  );
};

export default Dictionary;
