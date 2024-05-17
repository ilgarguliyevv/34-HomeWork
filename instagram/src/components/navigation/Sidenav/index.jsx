import React from "react";
import "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ForumIcon from "@mui/icons-material/Forum";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const Sidenav = () => {
  const navigate = useNavigate();
  return (
    <div className="sidenav">
      <img
        className="sidenav_logo"
        src="https://www.logolynx.com/images/logolynx/82/82abee4b6db4025c07209adec0d62acd.png"
        alt="Instagram Logo Black And Ahite - Instagram Word Logo Png@pngkey.com"
      ></img>
      <div className="sidenav_buttons">
        <button className="sidenav_button">
          <HomeIcon sx={{ fontSize: 30 }} />
          <span>Home</span>
        </button>
        <button className="sidenav_button">
          <SearchIcon sx={{ fontSize: 30 }} />
          <span>Search</span>
        </button>
        <button className="sidenav_button">
          <ExploreIcon sx={{ fontSize: 30 }} />
          <span>Explore</span>
        </button>{" "}
        <button className="sidenav_button">
          <SlideshowIcon sx={{ fontSize: 30 }} />
          <span>Reels</span>
        </button>{" "}
        <button className="sidenav_button">
          <ForumIcon sx={{ fontSize: 30 }} />
          <span>Messages</span>
        </button>{" "}
        <button className="sidenav_button">
          <FavoriteBorderIcon sx={{ fontSize: 30 }} />
          <span>Notifications</span>
        </button>{" "}
        <button className="sidenav_button">
          <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
          <span>Create</span>
        </button>
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="sidenav_button"
        >
          <PersonOutlineIcon sx={{ fontSize: 30 }} />
          <span>Profile</span>
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="sidenav_button"
        >
          <LogoutIcon sx={{ fontSize: 30 }} />
          <span>LogOut</span>
        </button>
      </div>
      <div className="sidenav_more">
        <button className="sidenav_button">
          <MenuIcon sx={{ fontSize: 30 }} />
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
