import GameIntroElement from "../../components/html/GameIntroElement";

const GameIntro = () => {
  const Box = ["Theme", "Motivation", "Intro"];

  const Header = ["遊戲主題", "提案動機", "遊戲說明"];

  const Content = [
    "2D 闖關冒險休閒遊戲",
    "以設計一款融合了打怪元素的休閒遊戲為出發點，設計簡單易懂，遊戲節奏輕鬆有趣，能夠讓玩家在遊戲中放鬆紓壓。遊戲中，玩家可以選擇不同的角色進行遊戲，每個角色都有自己的故事、技能和特點。設計要有挑戰性，以吸引玩家繼續玩下去，也達到帶給玩家樂趣的目的。",
    "遊戲遊玩請使用滑鼠做點擊，打開遊戲後，右上角的設定按鈕按下去，裡面有背景音樂及音效可以開關。主畫面點擊開始遊戲會進入選擇角色畫面，有三種角色可供選擇，貧民、學生和青蛙，選擇想要遊玩的角色就會進入角色升級畫面，有攻擊力、體力、暴擊率以及技能可供玩家升級，初始等級為1，上限為10，每次升級花費10金幣，點擊升級按鍵，就會升級對應能力。點擊開始戰鬥，就會進入該角色的打鬥畫面，使用畫面的上、左、下按鍵來閃避敵人攻擊，敵人攻擊前會有提示箭頭，玩家再根據箭頭的方向來閃避。再敵人攻擊的空檔時間，就可以按攻擊箭頭來對敵人進行攻擊。技能鍵可供回血，一次耗費150技能值，技能值的來源為成功閃避敵人的攻擊，加的數量為隨機數字。敵人血量為0時，會出現下一個敵人，每打敗一個敵人，會獲得隨機金幣數。BOSS關打完後，進入Victory畫面，可查看關卡中獲得的金幣數量。玩家血量為0時，遊戲結束，進入Game Over畫面，可查看關卡中獲得的金幣數量。不同關卡獲得的金幣都可以通用，例如再貧民關卡中獲得的金幣，可以在學生或青蛙的升級頁面中使用。",
  ];

  return (
    <div className="GroupHome_GameIntro" id="GameIntro">
      <h1 className="GroupHome_Container_Text">遊戲介紹</h1>
      <div className="GroupHome_GameIntro_Text" id="GameTheme">
        <GameIntroElement
          Box={Box[0]}
          Header={Header[0]}
          Content={Content[0]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameMotivation">
        <GameIntroElement
          Box={Box[1]}
          Header={Header[1]}
          Content={Content[1]}
        />
      </div>
      <div className="GroupHome_GameIntro_Text" id="GameIntro">
        <GameIntroElement
          Box={Box[2]}
          Header={Header[2]}
          Content={Content[2]}
        />
      </div>
    </div>
  );
};

export default GameIntro;
