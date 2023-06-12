import GameIntroElement from "../../components/html/GameIntroElement";

const GameGroupDivision = () => {
  const Box = ["Division"];
  const Header = ["惠維慶", "陳宥瑜", "戴新祐", "林成翰"];
  const Content = [
    "寫出phaser的場景切換、美術風格擔當、字形管理、畫出病床跟櫃子的素材、遊戲機制發想、遊戲劇情發想",
    "撰寫期中報告文案、遊戲機制發想、遊戲劇情發想",
    "用phaser寫出整個第一關、完善第二關的遊戲機制、遊戲機制發想、遊戲劇情發想",
    "撰寫此報告、用phaser拉出第二關的場景、遊戲機制發想、遊戲劇情發想",
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
      <div className="GroupHome_GameIntro_Text" id="GroupDivision">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[5]}
          Content={Content[5]}
        />
      </div>
    </div>
  );
};
export default GameGroupDivision;
