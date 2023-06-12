import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G06/img/DScene_1.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "位置", "需要", "一棵產出幾個", "產生時間(秒)", "採集一個需要按的次數"],
    ["數值名稱", "熊貓", "狗狗"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["番茄", "果園樹叢", "50", "10", "60s", "1"],
      ["橘子", "果園樹上", "50", "10", "60s", "1"],
      ["南瓜", "果園地上", "10", "1", "75s", "3"],
      ["樹葉", "森林樹上", "100", "20", "60s", "1"],
      ["金樹葉", "森林樹上", "4、5", "1", "收集20個樹葉", "1"],
      ["蝶豆花", "森林樹叢", "100", "20", "60s", "1"],
      ["桑葚", "森林樹叢", "100", "20", "60s", "1"],
      ["藍莓", "森林樹叢", "100", "20", "60s", "1"],
      ["椰子", "海邊樹上", "4、5", "1", "150s", "3"],
      ["粗樹枝", "海邊地上", "1", "無", "無", "1"],
    ],
    [
      ["往上", "W", "ArrowUp"],
      ["往左", "A", "ArrowLeft"],
      ["往右", "D", "ArrowRight"],
      ["地面採集", "S", "ArrowDown"],
      ["樹上採集", "space", "左右"],
      ["椰子採集", "space", "左右閃避，下採集"],
      ["進入石磨/箱子/合成介面", "space", "enter"],
      ["放置物品", "W", "ArrowUp"],
      ["拿出物品", "S", "ArrowDown"],
      ["箱子物品選取", "A/D", "左/右"],
    ],
    [
      ["採集", "", "","提示音效(成功)"],
      ["背景音樂", "", "","歡樂探險，帶點童趣"],

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
