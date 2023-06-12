import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    ["./Project/G08/img/Design_1.png", "./Project/G08/img/Design_2.png"],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["小怪", "扣 2 格血", "咳咳怪、隔離偷跑怪、吃蝙蝠怪"],
      ["小 BOSS", "20 血量", "Delta(放置病毒地雷，扣 2 格血)"],
      [
        "大 BOSS",
        "30 血量",
        "CoV1.0(放置病毒地雷，扣 3 格血，下病毒雨，扣 1 格血且病毒變異，會隱藏後隨機出現)",
      ],
      ["防毒面具", "+5 血量", ""],
      ["血包", "+5 血量", "只在 Boss 關卡出現"],
      ["口罩", "", "打小怪用"],
      ["完整酒精 1.0", "", "需要靠 25 酒精滴滴升級"],
      ["完整酒精 2.0", "", "需要靠 50 酒精滴滴升級"],
      ["完整酒精 Max", "", "需要靠 80 酒精滴滴升級"],
      ["白天", "", "車子、三角錐、坑"],
      ["傍晚", "", "車子、三角錐、坑、鳥"],
      ["晚上", "", "車子、三角錐、坑、鳥"],
      ["一盒口罩", "口罩數量+5", ""],
      ["酒精放送", "酒精滴滴+5", ""],
      ["酒精過期", "酒精滴滴-5", ""],
      ["口罩被搶", "口罩數量-5", ""],
    ],
    [["", "", ""]],
    [
      ["大Boss", "", ".mp3", ""],
      ["小Boss", "", ".mp3", ""],
      ["一般畫面", "", ".mp3", ""],
      ["使用隔板音效", "", ".mp3", ""],
      ["跳音效", "", ".mp3", ""],
      ["撿東西音效", "", ".mp3", ""],
      ["酒精射擊音效", "", ".mp3", ""],
      ["口罩打到怪物音效", "", ".mp3", ""],
      ["丟口罩音效", "", ".mp3", ""],
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
