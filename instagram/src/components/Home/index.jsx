import React from "react";
import Sidenav from "../navigation/Sidenav";
import "../Home/style.css";
import TimeLine from "../../timeline/TimeLine";
const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage_nav">
        <Sidenav />
      </div>
      <div className="homepage_timeline">
        <TimeLine />
      </div>
    </div>
  );
};

export default Home;
