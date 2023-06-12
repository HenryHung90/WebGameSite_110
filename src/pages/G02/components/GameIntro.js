import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "經典小遊戲",
    "因為小時候網頁遊戲盛行，所以時常接觸一些經典小遊戲，例如這款飛行的小鳥，這款遊戲算是單機遊戲中好上手但難精通的遊戲，也時常被這款遊戲搞得自己心態炸裂，所以決定致敬這款經典遊戲，順便延續傳統，讓玩家成為閃躲遊戲精英。",
    "為什麼會取「跑啊!小鳥!」這個名字為遊戲的名稱？因為在的小時候玩過一個叫飛翔的小鳥的小遊戲，是一個網頁小遊戲，對於年紀很小的我們來說，該遊戲的難度非常的高，玩著玩著總是能在遊戲前期就陣亡了，所以對這個遊戲的印象非常的深刻，後來需要自己動手製作小遊戲的時候，當時的記憶突然浮現在腦海裡，所以想要致敬這個經典的小遊戲，跑啊！小鳥！",
  ];

  return (
    <div className="GroupHome_GameIntro" id="GameIntro">
      <h1 className="GroupHome_Container_Text">遊戲介紹</h1>
      <div className="GroupHome_GameIntro_Text" id="GameTheme">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameMotivation">
        <GameIntroElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameIntro">
        <GameIntroElement
          Box={Box[2]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
    </div>
  );
};

export default GameIntro;
