import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "19990年13月252日，鳥國迎來了一場暴風雨。這讓幾千年來不曾下過大雨的鳥國被殺的一個措手不及，讓鳥蛋們無從提前準備。然而一陣強風吹過，主角蛋幾勒不慎從鳥巢中跌落樹下，在樹下的他又冷又無助，想破頭也不知道如何重回溫暖的鳥窩。這時看到在不遠處的鳥哥哥，鳥哥哥平時就有在接送樹上小動物們。讓蛋幾勒看到了光亮，也學著對面的蛋友一起賣力的向上，最終 重返舒適鳥窩。",
    "1. 玩家起始狀態，蛋殼的耐久度為3。2. 玩家需使用鍵盤上的上、左、右鍵來控制方向。3. 樹葉叢之間都有間隙，若不慎失足墜落，將回到起點，重新遊玩。4. 需注意葉子的顏色，若不慎降落在黃色枯葉上會墜落。5. 遊玩時，上方不定時有石頭落下，若不慎被落石擊中，蛋殼裂開一次。 6. 遊玩時，途中會有「鋼蛋道具」，可以抵擋石頭攻擊一次。7. 遊玩時，畫面會出現「金樹葉」需要蒐集，集滿六片即可返回鳥窩。 註:鋼蛋道具若被石頭擊中將會消失，玩家的耐久度不會因此恢復，將維持獲得道具前的狀態。例如:玩家在未獲得道具前的耐久度狀態為2，獲得道具後，將可以抵擋一次石頭的攻擊，若不幸被落石擊中，先前獲得鋼蛋道具將會消失，玩家的耐久則維持在2。",
    "玩家必須蒐集金樹葉，共計6片，最終找到鳥哥哥並交付金樹葉後，返回 溫暖的鳥窩，遊戲結束。",
    "玩家需使角色不停跳躍到樹葉叢上，讓角色免於死亡",
    "玩家需使用鍵盤上的上、左、右鍵來操作",
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
