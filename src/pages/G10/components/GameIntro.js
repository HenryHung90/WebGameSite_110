import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "一顆鳥蛋意外被強風從樹頂吹落，玩家透過遊玩遊戲，藉由層層樹叢與善心鳥哥哥的幫助下，讓主角蛋幾勒重回溫暖的鳥窩。",
    "現代人生活繁忙，較少有時間可以玩遊戲、放鬆。因此開發一款讓玩家可以輕鬆玩的小遊戲，不需要複雜的操作便可享受遊戲的樂趣。同時作為網頁遊戲更有跨平台的特性，在任何裝置都可以透過瀏覽器遊玩。",
    "玩家需透過上、左、右鍵來操控主角蛋幾勒的去向，也需要蒐集通關要件「金樹葉」進而達成獲勝目標。",
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
