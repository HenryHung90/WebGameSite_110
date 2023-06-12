import GameImageElement from "../../components/html/GameImageElement";

const GameScene = () => {
  const Box = ["Scene"];

  const Header = ["場景設計"];

  const Content = [["./Project/G01/img/DScene_1.png"]];

  return (
    <div className="GroupHome_GameScene" id="GameScene">
      <h1 className="GroupHome_Container_Text">遊戲場景設計</h1>
      <div className="GroupHome_GameIntro_Text" id="GameScene">
        <GameImageElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
    </div>
  );
};

export default GameScene;
