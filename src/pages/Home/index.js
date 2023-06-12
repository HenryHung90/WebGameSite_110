import $ from "jquery";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShortCut from "./components/ShortCut";
import GroupLine from "./components/GroupLine";
import HomeMenu from "../components/html/HomeMenu";

import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import "./index.css";

import { firebase } from "../../Firebase/firebase";

const Home = ({ User }) => {
  const [Scroll, setScroll] = useState(0);
  const Navigate = useNavigate();

  const Group = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
  ];

  useEffect(() => {
    if (Scroll >= 350) {
      $("#HomeUser").animate({ opacity: 1 }, 500);
    }
    if (Scroll >= 400) {
      $("#Line_1").animate({ opacity: 1 }, 500);
    }
    if (Scroll >= 800) {
      $("#Line_2").animate({ opacity: 1 }, 500);
    }
    if (Scroll >= 1100) {
      $("#Line_3").animate({ opacity: 1 }, 500);
    }
    if (Scroll >= 1700) {
      $("#Line_4").animate({ opacity: 1 }, 500);
    }
  }, [Scroll]);
  $(window).scroll(function () {
    //為了保證相容性，這裡取兩個值，哪個有值取哪一個
    setScroll(document.documentElement.scrollTop || document.body.scrollTop);
    //scrollTop就是觸發滾輪事件時滾輪的高度
  });

  $(window).ready(() => {
    $(".CenterBox").fadeIn(1500);
  });
  const Logout = () => {
    firebase.auth().signOut();
    Navigate("/");
  };

  return (
    <div className="HomeContainer">
      <div className="CenterBox">
        <h1 id="HomeTitle">網頁遊戲設計大賞</h1>
        <div id="HomeBackground">
          {Group.map((item) => {
            return <ShortCut Group={item} key={item} />;
          })}
        </div>
        <div className="HomeGroupFileBox">
          <div id="HomeMenu">
            <HomeMenu User={User} />
          </div>
          <h3 id="HomeUser">歡迎回來 {User.UserName}</h3>
          <Button
            id="LogoutButton"
            onClick={Logout}
            variant="contained"
            startIcon={<GoogleIcon />}
            style={{
              fontFamily: "pixel font",
              fontSize: "20px",
            }}
          >
            Logout
          </Button>
          <GroupLine Group={Group} />
        </div>
      </div>
    </div>
  );
};

export default Home;
