import React from "react";
import "./Home.css";
import { MdLocationOn } from "react-icons/md";
import avatar from "../../images/avatar.png";

function Home() {
  return (
    <div id="home" className="home-container">
      <div className="grid-container">
        <div className="avatar-container">
          <div className="avatar-img-container">
            <img className="avatar" src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="intro-container">
          <h2 className="intro-heading">Hi, I'm Harsh Dev Singh</h2>
          <h3 className="intro-sub-heading">a Software Developer</h3>
          <h3 className="intro-sub-heading2">based in </h3>
          <h3 className="location">
            <i>
              <b>Dublin, Ireland</b>
            </i>
          </h3>
          <div className="geo">
            <MdLocationOn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
