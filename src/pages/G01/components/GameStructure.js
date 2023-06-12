import GameIntroElement from "../../components/html/GameIntroElement";

const GameStructure = () => {
  const Box = ["Process", "Script"];

  const Header = ["流程設計", "腳本設計"];

  const Content = [
    ["本遊戲分為多個關卡，每個關卡怪物的數量將有所不同，關卡越高怪物越多。玩家需要確保自己不被怪物攻擊才能進入下一關卡。在關卡中，玩家吃愛心以獲得分數。"],
    ["本遊戲將設計多個不同的關卡。關卡設計包括怪物的分佈、數量和分數。"],
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
