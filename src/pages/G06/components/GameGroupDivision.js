import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["蘇蕙婷", "袁萱芳", "蕭渝樺", "陳慧心"];
  const Content = [
    "企劃發想、程式-場景&攝影機、程式-整合&除錯、美術-場景設計、美術-LOGO&UI、校正", 
    "企劃發想、程式-封面&採集功能、程式-整合&除錯、美術-物件設計、美術-音效、校正", 
    "企劃發想、程式-封面&採集功能、程式-整合&除錯、美術-場景設計、美術-LOGO&UI、校正", 
    "企劃發想、美術-角色設計、美術-物件設計、校正"];

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
    </div>
  );
};
export default GameGroupDivision;
