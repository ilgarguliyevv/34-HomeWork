import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestions_title">Suggestions for you</div>
      <div className="suggestions_usernames">
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="username_info">
              <span className="username">guri_style</span>
              <span className="realiton">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="username_info">
              <span className="username">shovgu_huseynli</span>
              <span className="realiton">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="username_info">
              <span className="username">cristiano</span>
              <span className="realiton">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="username_info">
              <span className="username">realmadrid</span>
              <span className="realiton">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>I</Avatar>
            </span>
            <div className="username_info">
              <span className="username">433</span>
              <span className="realiton">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
