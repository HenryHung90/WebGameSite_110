import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "2D 橫向卷軸冒險遊戲",
    "《防疫新運動》是一款貼近時事題材的冒險遊戲，且簡單容易操作，採用單機模式收集武器去攻擊怪物。遊戲劇情設定於現代生活，為了幫助長年居住外縣市，卻因疫情 長時間無法輕易回家的主角「陳克拉克」回到家中，他必須打敗途中出 現阻礙他的怪物，有可能一不小心就會被感染，甚至喪命。遊戲的特色功能為道具多元、有著不同類型的怪物攻擊，使破關方式多元且刺激。",
    "生於這個時代的我們，被疫情搗亂原本的生活節奏，也使得很多在外國工作的人不能回家，他們對於家人的想念之情，只能默默埋在心底。因此我們想藉由這款遊戲解相思之愁，也將這場疫情用遊戲的方式記錄下來，紀錄在人類史篇中，是為重要史事之一。",
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
