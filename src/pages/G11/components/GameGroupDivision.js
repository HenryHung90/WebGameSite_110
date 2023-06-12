import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["杜孟洋", "汪承緒", "許其彬", "周方浩"];
  const Content = [
    "程式碼編寫55%、蒐集素材15%、美術部分10%、期末企畫書內容50%、總貢獻百分比44.99999%",
    "程式碼編寫44.999%、蒐集素材50%、美術部分10%、期末企畫書內容50%、總貢獻百分比40%",
    "程式碼編寫0.001%、蒐集素材0%、美術部分0%、期末企畫書內容0%、總貢獻百分比0.0000000000001%",
    "程式碼編寫0%、蒐集素材35%、美術部分80%、期末企畫書內容0%、總貢獻百分比15%",
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
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[4]}
          Content={Content[4]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
