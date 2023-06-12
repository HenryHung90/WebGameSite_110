import GameImageElement from "../../components/html/GameImageElement";
import GameTableElement from "../../components/html/GameTableElement";

const GameDesign = () => {
  const Box = ["Design", "Element", "Parameter", "Vocal"];

  const Header = ["遊戲場景", "遊戲元素", "物件參數", "遊戲音效"];

  const Content = [
    [
      "./Project/G10/img/Design_1.png",
      "./Project/G10/img/Design_2.png",
      "./Project/G10/img/Design_3.png",
    ],
  ];

  const TableHeader = [
    ["物件名稱", "功能", "備註"],
    ["數值名稱", "數值", "備註"],
    ["音效名稱", "數值", "格式", "備註"],
  ];
  const TableContainer = [
    [
      ["Logo", "", "541*122 px"],
      ["遊戲背景", "", "1080*800 px"],
      ["開始遊戲鍵", "", "164*84 px"],
      ["遊戲規則鍵", "", "164*84 px"],
      ["聲音開啟鍵", "", "47*48 px"],
      ["靜音鍵", "", "47*48 px"],
      ["重新開始鍵", "", "47*48 px"],
      ["返回鍵", "", "47*48 px"],
      ["換頁鍵", "", "87*72 px"],
      ["金樹葉", "當玩家收集累積6片 金樹，並碰到鳥哥哥時即可獲勝", "22*53 px"],
      ["樹葉叢", "玩家藉此平台網上跳躍到目的地", "84*33 px"],
      ["枯葉叢", "碰到即消失，玩家需避開此樹叢，以免墜落", "84*33 px"],
      [
        "石頭",
        "會從上方隨機掉落，被砸到會蛋殼會裂開一次，裂開三次即失敗",
        "65*60 px",
      ],
      ["鳥哥哥", "集滿六片金樹葉後，找鳥哥哥即獲勝", "57*78 px"],
      ["鋼蛋道具", "吃了會變鋼蛋", "47*69 px"],
      ["鋼蛋", "抵擋石頭攻擊一次", "46*64 px"],
    ],
    [
      ["角色移動", "左右每次 ± 100 px", ""],
      ["角色跳躍", "上每次 -150 px", ""],
      ["石頭砸中", "蛋殼破裂，耐久度-1", "有鋼蛋道具可免疫"],
    ],
    [
      [
        "背景音樂",
        "",
        ".mp3",
        "https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1300019",
      ],
      [
        "背景音樂2",
        "",
        ".mp3",
        "https://studio.youtube.com/channel/UC-AKIdydmoEPaFzd6n_DjuQ/music",
      ],
      ["跳躍", "", ".mp3", "https://taira-komori.jpn.org/freesoundtw.html"],
      ["按鈕", "", ".mp3", "https://sc.chinaz.com/yinxiao/"],
      ["蛋破裂", "", ".mp3", "https://sc.chinaz.com/yinxiao/"],
      ["踩樹葉沙沙聲", "", ".mp3", "https://sc.chinaz.com/yinxiao/"],
      ["通關", "", ".mp3", "https://sc.chinaz.com/yinxiao/"],
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
