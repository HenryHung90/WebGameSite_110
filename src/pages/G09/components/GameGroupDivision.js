import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["陳品坊", "孫葳麟", "洪子晴", "吳品萱"];
  const Content = [
    "美術設計、劇情設計、元素製作、場景製作 、企劃書、美術照、流程設計、心智圖",
    "音效配置、遊戲目標、甘特圖 、遊戲玩法、關卡三製作、遊戲整合、流程設計",
    "流程設計、遊戲玩法、遊戲規則、關卡二製作、選關畫面製作、影片製作",
    "遊戲玩法、關卡一製作、選關畫面製作、遊戲目標、劇情設計",
  ];

  return (
    <div className="GroupHome_GroupDivision" id="GroupDivision">
      <h1 className="GroupHome_Container_Text">小組分工</h1>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[3]}
          Content={Content[3]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
