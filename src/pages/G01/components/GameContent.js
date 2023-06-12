import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "玩家在現實世界夢遊中進入了異世界，而這個異世界正被大量的史萊姆、骷髏和蝙蝠所支配。玩家必須躲開所有怪物，逃出異世界，以回顧正常生活。",
    "玩家需要躲避怪物的攻擊，全力往下一關前進，玩家需經過所有關卡才能逃出異世界。玩家可以透過關卡挑戰來獲得分數。",
    "玩家需要躲避怪物的攻擊，跑到傳送點。",
    "玩家的最終目標是躲避每一個關卡的所有怪物的攻擊，回到現實世界。",
    "人物移動：鍵盤方向鍵，在地圖上進行移動。\n傳送：鍵盤L鍵，人物須在地圖上的傳送陣才能進行傳送。\n玩家需要使用鍵盤控制角色移動，玩家失敗並重新開始。",
  ];

  return (
    <div className="GroupHome_GameContent" id="GameContent">
      <h1 className="GroupHome_Container_Text">遊戲設計</h1>
      <div className="GroupHome_GameIntro_Text" id="GameStory">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameRule">
        <GameIntroElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameMission">
        <GameIntroElement
          Box={Box[2]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameGoal">
        <GameIntroElement
          Box={Box[3]}
          Header={Header[3]}
          Content={Content[3]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GamePlayer">
        <GameIntroElement
          Box={Box[4]}
          Header={Header[4]}
          Content={Content[4]}
        />
      </div>
    </div>
  );
};

export default GameContent;
