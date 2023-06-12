
import GameIntroElement from "../../components/html/GameIntroElement";

const GameStructure = () => {
  const Box = ["Process", "Script"];

  const Header = ["流程設計", "腳本設計"];

  const Content = [
    ["三個關卡，第一關: 只有靜止的障礙物，時間 30 秒，結束即進入下一關\n第二關: 障礙物的數量增加，時間 30 秒，結束即進入下一關\n第三關: 增加一種怪物移動，時間 30 秒，結束即獲勝"],
    ["第一關:讓玩家熟悉遊戲操作，增加信心\n第二關: 玩家已熟悉遊戲操作，增加難度，讓玩家產生挑戰性\n第三關: 最終的關卡，速度都增加，挑戰玩家的技術"]
  ];

  return (
    <div className="GroupHome_GameStructure" id="GameStructure">
      <h1 className="GroupHome_Container_Text">遊戲架構</h1>
      <div className="GroupHome_GameIntro_Text" id="GameProcess">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameScript">
        <GameIntroElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
    </div>
  );
};

export default GameStructure;
