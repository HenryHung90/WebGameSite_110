import GameImageElement from "../../components/html/GameImageElement";

const GameStructure = () => {
  const Box = ["Process", "Script"];

  const Header = ["流程設計", "腳本設計"];

  const Content = [
    ["./Project/G08/img/Structure_1.png"],
    ["./Project/G08/img/Structure_2.png"],
  ];

  return (
    <div className="GroupHome_GameStructure" id="GameStructure">
      <h1 className="GroupHome_Container_Text">遊戲架構</h1>
      <div className="GroupHome_GameIntro_Text" id="GameProcess">
        <GameImageElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameScript">
        <GameImageElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
    </div>
  );
};

export default GameStructure;
