import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G05/img/DScene_3.png",
      "./Project/G05/img/DScene_4.png",
      "./Project/G05/img/DScene_5.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["貧民", "攻擊方式：-25 {直前}", "生命力:100"],
      ["守衛", "攻擊方式：-40~-60 {上中下}  暴擊率:1 % (基礎傷害 * 2)", "生命力:200"],
      ["考卷", "攻擊方式：-10{上、下、前}", "生命力:100"],
      ["報告", "攻擊方式：-20 {前面橫排}", "生命力:250"],
      ["老師", "攻擊方式：-40 ~80 -{前、上、下、上到下、下到上、(特殊攻擊方式前上下隨機連續)} 暴擊率:3%(基礎傷害*2)", "生命力:700"],
      ["蚊子", "攻擊方式：-10{上、下}", "生命力:100"],
      ["蒼蠅", "攻擊方式：-15{上到下、下到上}", "生命力:120"],
      ["麵包蟲", "攻擊方式：-20{前面橫排、上、下}", "生命力:200"],
      ["蛇王", "攻擊方式：-60 ~ -80{前、上、下、上到下、下到上、(特殊攻擊方式前上下隨機連續)} 暴擊率：5%(基礎傷害*2)", "生命力:500"],
    ],
    [
      ["", "", ""],
    ],
    [
      ["首頁背景音樂", "", "", ""],
      ["關卡背景音樂", "", "", ""],
      ["勝利音樂", "", "", ""],
      ["失敗音樂", "", "", ""],
      ["攻擊特效音(貧民)", "", "", ""],
      ["攻擊特效音(蜥蜴)", "", "", ""],
      ["攻擊特效音(守衛)", "", "", ""],
      ["攻擊特效音(學生)", "", "", ""],
      ["攻擊特效音(考卷)", "", "", ""],
      ["攻擊特效音(老師)", "", "", ""],
      ["攻擊特效音(青蛙)", "", "", ""],
      ["攻擊特效音(蛇)", "", "", ""],
      ["攻擊特效音(蒼蠅)", "", "", ""],
      ["攻擊特效音(麵包蟲)", "", "", ""],
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
