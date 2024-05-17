import React from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
const Posts = () => {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          <Avatar className="avatar"></Avatar>
          <div className="adim">guliyevv_i</div> <span>12h</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post_image">
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="post_footer">
        <div className="post_footerIcons">
          <div className="post_IconsMain">
            <FavoriteBorderIcon fontSize="2x" className="postIcon" />
            <ChatBubbleOutlineIcon fontSize="2x" className="postIcon" />
            <TelegramIcon fontSize="2x" className="postIcon" />
          </div>
          <div className="post_IconSave">
            <BookmarkBorderIcon fontSize="2x" className="postIcon" />
          </div>
        </div>
        <span className="Likes">Liked by 101 people</span>
      </div>
    </div>
  );
};

export default Posts;
