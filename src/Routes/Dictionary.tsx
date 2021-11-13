import React from "react";
import SearchBar from "../Component/Common/SearchBar";
import CropsList from "../Component/Dictionary/CropsList";
import DictTopSection from "../Component/Dictionary/DictTopSection";

const Dictionary = () => {
  return (
    <div>
      <DictTopSection />
      <SearchBar />
      <CropsList />
    </div>
  );
};

export default Dictionary;
