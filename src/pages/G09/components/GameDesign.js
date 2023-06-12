import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G09/img/Design_1.png",
      "./Project/G09/img/Design_2.png",
      "./Project/G09/img/Design_3.png",
      "./Project/G09/img/Design_4.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["安森", "", "玩家遊戲中操控的角色"],
      ["蜘蛛", "", "女主角白天同學異樣眼光的化身，為遊戲中的怪物"],
      ["背包", "", ""],
      ["毛線球", "", ""],
      ["心", "", ""],
      ["問號", "", "關卡未通關為黃色，通關為藍色"],
      ["日記", "", ""],
      ["跳板", "", ""],
      ["藥", "", ""],
      ["眼睛", "", ""],
    ],
    [
      ["愛心圖片", "大小57*52", "愛心一排總數15顆,間隔 :72"],
      ["藥丸圖片", "大小904*150", "彈跳係數:1"],
      ["安森精靈圖", "大小904*150", "角色尺寸98*130,彈跳係數:0.12"],
      ["平台圖片", "大小400*24", ""],
      ["背景圖片", "大小1920*1080", ""],
    ],
    [
      ["主畫面", "", ".mp3", ""],
      ["關卡一", "", ".mp3", ""],
      ["關卡二", "", ".mp3", ""],
      ["關卡三", "", ".mp3", ""],
      ["觀看日記", "", ".mp3", ""],
      ["觸碰元素(心)", "", ".mp3", ""],
      ["觸碰元素(藥丸、毛線球、蜘蛛)", "", ".mp3", ""],
      ["角色死亡", "", ".mp3", ""],
    ],
  ];
  return (
    <div className="GroupHome_GameDesign" id="GameDesign">
      <h1 className="GroupHome_Container_Text">遊戲美術設計</h1>
      <div className="GroupHome_GameIntro_Text" id="GameDesign">
        <GameImageElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameElement">
        <GameTableElement
          Box={Box[1]}
          Header={Header[1]}
          TableHeader={TableHeader[0]}
          TableContainer={TableContainer[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameParameter">
        <GameTableElement
          Box={Box[2]}
          Header={Header[2]}
          TableHeader={TableHeader[1]}
          TableContainer={TableContainer[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameVocal">
        <GameTableElement
          Box={Box[3]}
          Header={Header[3]}
          TableHeader={TableHeader[2]}
          TableContainer={TableContainer[2]}
        />
      </div>
    </div>
  );
};

export default GameDesign;
