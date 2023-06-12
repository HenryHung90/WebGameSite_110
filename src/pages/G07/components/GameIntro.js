import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "恐怖解謎/角色扮演（2D RPG） ",
    "組員四個人都很喜歡聽故事。我們認為，一個能吸引人的遊戲， 重點在於劇情內容和情境塑造。網路上有所謂的「四大日式恐怖 RPG」，其中《魔女之家》的遊戲更是對我們的影響最深。因此我們打算使用這學期所學的 Phaser 3 嘗試打造一款以恐怖為基調的 2D RPG 解謎劇情遊戲。",
    "玩家將操作主角，躲避鬼魂的追擊，找到開門的鑰匙，全速逃離這座詭異的建築!!",
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
