import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPageContainer from "../pages/CategoryPage/CategoryPageContainer";
import HomePageContainer from "../pages/HomePage/HomePageContainer";
import StoryPageContainer from "../pages/Story/StoryMain/StoryPageContainer";
import UserPageContainer from "../pages/UserPage/UserPageContainer";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageContainer/>} />
      <Route path="user" element={<UserPageContainer />} />
      <Route path="category" element={<CategoryPageContainer />} />
      <Route path="story/*" element={<StoryPageContainer />} />
    </Routes>
  );
};

export default MainRoutes;
