import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "從前從前，有一隻黑白相間的熊貓名叫納特，他的夢想是成為一隻七彩的熊貓，但是他卻不知道如何實現這個夢想。 有一天，他遇到了一隻狗狗，名叫達達。達達非常喜歡納特。納特告訴達達他的夢想，並問他是否知道如何變成彩色。 達達沉思了一會兒，然後說「我知道有一個傳說—世界上有七種主要的顏料。如果我們能採集到一定的數量，你可能就會變成一隻七彩的熊貓了!」於是，納特和達達決定一起展開冒險，攜手尋找七種不同的顏料，成為一隻七彩熊貓。在旅途中納特發現傳說其實是假的，但他從中找到了屬於自己色彩的獨特意義，那就是即使外表是黑白的，人生也可以很彩色。",
    "透過雙人合作的操作方式，收集規定物品達到數量即可過關。",
    "紅->番茄*99\n黃 -> 南瓜 * 30\n綠 -> 樹葉 * 50\n藍 -> 蝶豆花 * 99\n靛 -> 桑葚 * 99\n紫 -> 藍莓 * 99",
    "兩位玩家需要一起在場景中探索，透過合作的方式，採集一定數量的物品，來幫助納特實現夢想。",
    "WSAD 操控熊貓、上下左右 操控狗狗、S 下鍵 拾取物品、南瓜需兩位玩家一起拾取",
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
