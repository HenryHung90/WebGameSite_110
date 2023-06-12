import "../components/css/GroupHome.css";
import "./index.css";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import YouTubeIcon from "@mui/icons-material/YouTube";

import GameDesignPath from "./components/GameDesignPath";
import GameIntro from "./components/GameIntro";
import GameContent from "./components/GameContent";
import GameDesign from "./components/GameDesign";
import GameStructure from "./components/GameStructure";
import GameScene from "./components/GameScene";
import GameTimingGantt from "./components/GameTimingGantt";
import GameGroupDivision from "./components/GameGroupDivision";
import HomeMenu from "../components/html/HomeMenu";
import GameBarElement from "../components/html/GameBarElement";

import $ from "jquery";
import { useEffect, useState } from "react";

const GroupEightHome = ({ User }) => {
  const [Scroll, setScroll] = useState("");
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, 300);
  }, []);

  $(window).scroll(function () {
    //為了保證相容性，這裡取兩個值，哪個有值取哪一個
    setScroll(document.documentElement.scrollTop || document.body.scrollTop);
    //scrollTop就是觸發滾輪事件時滾輪的高度
  });

  useEffect(() => {}, [Scroll]);
  function iframe() {
    return {
      __html: `<iframe id="Iframe" src="" frameborder="0" width="100%" height="100%"/>`,
    };
  }
  const PlayGame = (e) => {
    e.preventDefault();
    $(".GameContainer").fadeIn(500);
    $("html, body").animate({ scrollTop: 0 }, 100);
    $("#HomeMenu").animate({ opacity: 0, zIndex: -1000 }, 100);
    $("#Iframe").attr("src", "./Project/G08/index.html");
    $("body").css({ overflow: "hidden" });
  };
  const OutGame = (e) => {
    e.preventDefault();
    $(".GameContainer").fadeOut(500);
    $("#HomeMenu").animate({ opacity: 1, zIndex: 1000 }, 100);
    $("#Iframe").attr("src", "");
    $("body").css({ overflow: "auto" });
  };
  const GoIntro = (e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 800 }, 1000);
  };

  return (
    <div id="HomeContainer">
      <div id="HomeMenu">
        <HomeMenu User={User} />
      </div>
      <div className="GameContainer">
        <Button
          id="GroupHome_PlayButton"
          onClick={OutGame}
          variant="contained"
          startIcon={<PlayArrowIcon />}
        >
          結束遊玩
        </Button>
        <div className="Gaming" dangerouslySetInnerHTML={iframe()} />
      </div>
      <div className="GroupHome" id="GroupHome_G08">
        <div className="GroupHome_Main">
          <div className="GroupHome_MainText">
            <div className="GroupHome_Cover" />
            <h1 className="GroupHome_GroupNumber">Group.08</h1>
            <h1 className="GroupHome_GroupName">Unknown</h1>
            <h3 className="GroupHome_GroupMember">
              何念樺、顏郁盛、陳東科、丁兆生
            </h3>
            <Button
              id="GroupHome_PlayButton"
              href="https://youtu.be/zjnlePUQXio"
              variant="contained"
              startIcon={<YouTubeIcon />}
            >
              介紹影片
            </Button>
            <Button
              id="GroupHome_PlayButton"
              onClick={PlayGame}
              variant="contained"
              startIcon={<PlayArrowIcon />}
            >
              遊戲試玩
            </Button>
          </div>
          <div className="GroupHome_Image" id="GroupHomeImage_G08"></div>
        </div>
        <h3 className="GroupHome_GoIntro" onClick={GoIntro}>
          下滑看介紹
        </h3>
      </div>
      <div className="GroupHome_Container">
        <GameBarElement />
        <GameDesignPath />
        <GameIntro />
        <GameContent />
        <GameStructure />
        <GameScene />
        <GameDesign />
        <GameTimingGantt />
        <GameGroupDivision />
      </div>
    </div>
  );
};

export default GroupEightHome;
