import React, { useState } from "react";
import Suggestions from "./Suggestions";
import "./timeline.css";
import Posts from "./Posts/Posts";

const TimeLine = () => {
  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
      <div className="timeline_right">
        <Suggestions />
      </div>
    </div>
  );
};

export default TimeLine;
