import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "近年來因為疫情肆虐的關係，人們的生活被搞得一團糟，不過人類代表「陳克拉克」不畏艱難的穿上裝備，出門與那些沒有良好衛生觀 念和帶有病毒的人們面對面戰鬥，若是順利的話，他就能回到家中與家人們吃上一頓豐盛的家常菜;但是他如果在路途不幸染疫了，那他將無法回家，更無法吃上家裡為了迎接他兒煮的美味飯菜。",
    "一般關卡:玩家有 10 格血量。在路上掉到坑裡會扣 1 格血量。被小怪打到會扣 2 格血量。在路上撿到口罩可以用來打小怪，打死小怪會掉 2 個酒精滴滴。撿防毒面具可以補 5 血量。隱藏寶物(道具)，有正向效果或反向效果。血量扣完時遊戲結束。 Boss 關卡:收集酒精滴滴打 BOSS，收集到 25 個酒精滴滴時，將會變成完整酒精 1.0，才可以攻打 BOSS。收集至 50 個酒精滴滴時， 變成完整酒精 2.0，收集至 80 個酒精滴滴時，變成完整酒精Max。階段任務和最終任務會到另一個固定空間進行。階段任務:打小 BOSS (Delta 病毒，血量 20)，會掉 5 個酒精滴滴。最終任務:打大 BOSS (CoV1.0 病毒，血量 30)，贏下遊戲，遊戲結束。",
    "1.幫助「陳克拉克」打敗怪物，讓他實現可以回家見到家人和吃上美味佳餚的願望  2.遊戲從易到難，隨著單場遊戲的時間長短觸發不同階段任務，讓玩家更有不同體驗和挑戰性 3.玩家能夠收集武器去打怪物，隨著武器的增加，也讓玩家增加對怪物攻擊的玩法，創造多元性 4.即時反饋，玩家一但被怪物攻擊或得到道具，會有正向或反向對於血條和行動速度的變化，增加刺激性 5.別於市面其他款遊戲，增加跳轉空間、貼近時事，吸引大眾來玩",
    "當遊戲開始時，就會先給玩家 10 個口罩，畫面開始移動，要試著嘗試躲避障礙及撿取酒精滴滴，收集足夠的酒精滴滴就會變成完整酒精，才可打 BOSS。地圖上開始出現武器、材料或是裝備時，要記得去撿，撿起來的物品會放在背包裡。開始出現小怪了，要使用手上的武器去打敗小怪。如果地圖出現問號箱子，可以嘗試去撿，會有意想不到的效果，出現血包也要撿，可以補血。小 BOSS 出現了，你要利用之前撿到的武器去打敗小怪，總共會遇到了兩次，如果血扣完遊戲就結束了。大 BOSS 出現了，只要打敗大 BOSS，玩家就贏了，遊戲就會結束，可以繼續下一關。",
    "↑:跳 // ←:向左移動 // →:向右移動 // F:發射酒精(有此裝備才可使用，否則無效) // G:發射口罩(有武器才可使用，否則無效) // H:使用防毒面具",
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
