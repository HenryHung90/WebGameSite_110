import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "劇情、闖關",
    "對於「憂鬱症」身邊也發生過一些案例，而這些人當中有的不幸離開人世。離開的原因有很多，有的對生活失去了熱忱，也有的是父母給的壓力過大等等。也許有人認為這只是小病，過一陣子或吃藥就沒事了，殊不知若是疏忽，它就會像蛀蟲一樣一點點啃食掉心靈。希望玩家在遊玩的過程中能體會到憂鬱症患者是很需要陪伴的。",
    "玩家在遊戲中的身分是女主角縫製的玩偶「安森」，玩家需要透過按鍵操控安森闖關。",
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
