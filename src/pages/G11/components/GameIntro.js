import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "玩家操控戰鬥機進行戰鬥為主題的橫向卷軸射擊遊戲。",
    '因為我們這個年紀普遍都有接觸過射擊遊戲，而市面上的射擊遊戲遊玩時間都偏長且難度偏高，所以我們打算做一款操作相對簡單，遊玩時間較短的一款射擊遊戲。',
    '這是一個簡單的橫向卷軸射擊遊戲，玩家需要在有限的生命值透過躲避敵人子彈和擊殺敵人來通關，和其他玩家比看誰獲勝時的分數更高。'];

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
