import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>udayg256@gmail.com</span>
        <div className="f-icons">
        <a href='https://www.facebook.com/udaykiran.gurramu'><Insta color="white" size={"3rem"} /></a>
        <a href='https://www.linkedin.com/in/uday-kiran-4aaa9a254/'>  <Facebook color="white" size={"3rem"} /></a>
          <a href='https://github.com/uday1508/uday1508'><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;