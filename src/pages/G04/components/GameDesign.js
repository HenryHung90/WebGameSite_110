import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [["./Project/G04/imgs/DScene_1.png"]];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      [
        "網頁圖示",
        "",
        "",
      ],
      [
        "生命值",
        "",
        "",
      ],
      [
        "暫停開始",
        "",
        "",
      ],
      [
        "平台",
        "",
        "",
      ],
    ],
    [
      [
        "Mofu",
        "",
        "",
      ],
      [
        "冰塊",
        "",
        "",
      ],
      [
        "保冰劑",
        "",
        "",
      ],
      [
        "貓貓",
        "",
        "",
      ],
      [
        "熊",
        "",
        "",
      ],
      [
        "鳥",
        "",
        "",
      ],
      [
        "鵝",
        "",
        "",
      ],
      [
        "水母",
        "",
        "",
      ],
      [
        "鯨魚",
        "",
        "",
      ],
      [
        "汽車",
        "",
        "",
      ],
      [
        "冰淇淋王國居民",
        "",
        "",
      ],
      [
        "冰淇淋王國守衛",
        "",
        "",
      ],
      [
        "陽光",
        "",
        "",
      ],
      [
        "吹風機",
        "",
        "",
      ],
    ],
    [
      ["", "", "", ""],
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
