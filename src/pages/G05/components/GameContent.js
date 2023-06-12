import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "貧民：生活在貧民窟的貧民，每天都過著每天都為了討生活而努力。有一天，村里開始有著關於可以致富的傳言：「聽說山腳下有一個洞窟，洞窟的最深層有著前人留下的寶藏，只要能夠到達洞窟深處，就有機會將所有的寶藏納為己有，但是深處貌似有",
    "戰鬥為即時制。在戰鬥中，玩家需要使用技能，瞄準敵人的弱點，並且閃避攻擊才不會受到傷害。",
    "貧民關卡：與其他貧民打架、消滅洞穴裡的小怪，最後解決守護寶藏的首衛。\n學生關卡：刷考試卷、打報告，解決出考卷的人(老師)。\n青蛙關卡：吃掉蚊子、蒼蠅、麵包蟲，還有擊敗毒蛇。",
    "貧民關卡：找到前人留下的寶藏。\n學生關卡：獲得學分，完成這學期的學業。\n青蛙關卡：保護池塘的其他生物。",
    "留意敵人將攻擊的位置。(畫面會先標示)接著抓準攻擊節奏，按下對應迴避位置的按鍵。角色可藉由按鍵盤上的上、下、左閃躲怪物攻擊，畫面上有普通攻擊鍵與技能鍵。普通攻擊可用滑鼠點擊或按下空白鍵，技能鍵可用滑鼠點擊或按下R鍵。",
  ];

  return (
    <div className="GroupHome_GameContent" id="GameContent">
      <h1 className="GroupHome_Container_Text">遊戲設計</h1>
      <div className="GroupHome_GameIntro_Text" id="GameStory">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameRule">
        <GameIntroElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameMission">
        <GameIntroElement
          Box={Box[2]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameGoal">
        <GameIntroElement
          Box={Box[3]}
          Header={Header[3]}
          Content={Content[3]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GamePlayer">
        <GameIntroElement
          Box={Box[4]}
          Header={Header[4]}
          Content={Content[4]}
        />
      </div>
    </div>
  );
};

export default GameContent;
