import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "有一隻叫做小萬的小鳥，日有所思夜有所夢，這個小鳥在白天感受到現實世界對他的敵意，他很可憐，大家都在霸凌他，鳥爸爸每天要他早起去雕蟲，他們住在城市花園中又寒冷又偏僻，這個世界上誰能忍受這種低於28度的溫度，這種日子實在不知道要怎麼過下去了，在沒有人安慰小萬的同時，小萬做了一個夢，夢到平常白天霸凌他的人事物，在夢裡變成了種種的障礙物，小萬必須飛回寒冷的窩接受爸爸的制裁，所以就讓玩家代替小萬，閃過一切的霸凌者，回到溫暖的窩中。",
    "不被地上及天上的障礙物阻擋，順利通過及勝利!",
    "在時間內，玩家須控制小鳥在飛翔時，不被地上及天上的障礙物阻擋，順利通過及勝利!",
    "遊戲開始後會開始倒數30秒!玩家須在秒數結束內不碰到任何障礙物，即獲得勝利!如果碰到就會死掉並從頭算30秒再來一次",
    "玩家必須使用方向鍵來操控小萬",
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
