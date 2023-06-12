import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "主角 Mofu 是一隻因為內部腐壞而被驅逐出冰淇淋王國的冰淇淋 Mofu 很想回家，於是踏上前往回家的道路拚盡全力的向前跑，但其實對於冰淇淋王國來說他是不受歡迎的存在。",
    "玩家一共有三條生命，可以利用方向鍵來控制 Mofu 奔跑，玩家若碰到敵人或畫面左邊會扣血，請玩家帶領 Mofu 回到家中。",
    "玩家的任務是不要被敵人抓到或撞到、不要碰到地圖邊緣、翻山越嶺躲避敵人的襲擊最終抵達終點。",
    "玩家需要控制 Mofu 跑到終點，並在途中躲避所有敵人的攻擊讓自己活下去，讓 Mofu 找回回家的道路。",
    "1. 開始遊戲後玩家能控制角色向上向下跳跟轉換左右方向，中途要躲避敵人的襲擊還有高聳的障礙物跟注意不要碰到移動的地圖。玩家可以自由控制角色在地圖中的三層路中上下跳躍移動。\n2. 遊戲的攝影機會在遊戲過程中等速向右前進，玩家不能碰到攝影機左邊，如果觸碰則死亡。\n3. 玩家每次遊戲會有 3 條生命值，每次死亡都會扣除一條生命值並且從該地圖重新開始，第 5 第 6 張地圖上有補充道具供玩家撿拾補充生命值，每吃到一個道具就會補充一條生命值，如果玩家在生命值歸零時會結束遊戲，玩家需要從頭重新開始。\n4. 遊戲難度會跟隨關卡逐漸困難，攝影機的速度也會逐漸變快，考驗玩家的應變能力找出通關的道路\n5. 當玩家跑到關卡最後會看到傳送門，接觸傳送門後，進入下一個地圖的起點。",
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
