import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    '某天，當和平的曙光被突如其來的戰爭彩虹籠罩，整個世界都陷入了恐慌與混亂之中。你，作為主角，被選中成為這場血脈喷弹的救世戰爭中的最後一線希望。身負使命，你接受了高層的委派，成為了一架全新銳不可擋戰機的驅動者，準備挺身而出，帶領這台堅韌不拔的戰機，以超凡的勇氣與智慧，突破敵人的重重包圍。',
    "試著在有限的血量內(10 滴)盡可能打倒所有敵人並打倒最終 boss。玩家撞到敵人會扣 1 格血量、玩家遭到子彈攻擊會扣 2 格血量",
    "分數：讓一個敵人跑掉會扣三分、殺掉一個會+10 分、擊殺 BOSS+300 分",
    "收集寶石來進化，以及擊敗第三關的 BOSS。",
    "移動（上、下、左、右）射擊（按鍵 c）",
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
