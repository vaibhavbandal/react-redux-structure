import React from "react";
import { Routes, Route } from "react-router-dom";
import StoryReactContainer from "../pages/Story/StoryReact/StoryReactContainer";
import StoryJavaScriptContainer from "../pages/Story/StoryJavaScript/StoryJavaScriptContainer";



const StoryTopicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StoryReactContainer />} />
        <Route path="story-react" element={<StoryReactContainer />} />
        <Route path="story-javascript" element={<StoryJavaScriptContainer />} />
      </Routes>
    </>
  );
};

export default StoryTopicRoutes;
