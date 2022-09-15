import React from "react";
import Poster from "../images/poster.png";
import channelImg from "../images/channel_profile.jpg";
import checkIconFilled from "../images/check-icon-filled.svg";
import likeIcon from "../images/like.svg";
import dislikeIcon from "../images/dislike.svg";
import sharedIcon from "../images/share.svg";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import UserIcon from "../images/user-img.png";
import { TextField } from "@mui/material";

function HomeLeftSection() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="home-left-section">
      <Router>
        <div className="main-poster">

        {/* {data.map(
                (user) => (
                  
                ),
                []
              )} */}


          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/07dfqQ0cvl8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen ></iframe>

          <div className="active-video-title">
            <h4>
              Hai Apna Dil To Awara | Dev Anand | Waheeda Rehman | Hemant Kumar
              | Solva Saal | Ishtar Music
            </h4>
          </div>
          <div className="description">
            <div className="channel-section">
              <img src={channelImg} alt="img" className="channel-logo" />
              <div className="channel-text">
                <Link to="/">Ishtar Music</Link>
                <img src={checkIconFilled} alt="img" className="check-icon" />
                <div className="subscriber-counter">37.7M subscribers</div>
              </div>
              <div className="btn-subscribe">Subscribe</div>
            </div>
            <div className="share-icons">
              <ul>
                <li>
                  <img src={likeIcon} alt="like icon" />
                  116k
                </li>
                <li>
                  <img src={dislikeIcon} alt="like icon" />
                  Dislike
                </li>
                <li>
                  <img src={sharedIcon} alt="like icon" />
                  Share
                </li>
                <li className="dots">...</li>
              </ul>
            </div>
          </div>
          <div className="description">
            <p>
              10,897,724 views Jul 30, 2019 Hai Apna Dil To Awara | Dev Anand |
              Waheeda Rehman | Hemant Kumar | Solva Saal
              <ul>
                <li>Song : Hai Apna Dil To Awara</li>
                <li>Singer : Hemant Kumar</li>
                <li>Feat : Dev Anand & Waheeda Rehman</li>
                <li>Music : S.D. Burman</li>
                <li>Lyricist : Majrooh Sultanpuri</li>
                <li>Movie : Solva Saal</li>
              </ul>
              <p>
                this url is for "accordion":
                https://codesandbox.io/s/jzx44ynyqw?file=/src/index.js
              </p>
            </p>
          </div>

          <div className="comment-section">
            <p>3,712 Comments</p>
            <div className="user-name">
              <img src={UserIcon} alt="icon" className="user-icon"/>
              <TextField
                label="Add a comments..."
                variant="standard"
                className="full-width"
              />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default HomeLeftSection;
