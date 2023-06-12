import GameIntroElement from "../../components/html/GameIntroElement";

const GameContent = () => {
  const Box = ["Story", "Rule", "Mission", "Goal", "Player"];

  const Header = ["遊戲故事", "遊戲規則", "遊戲任務", "遊戲目標", "遊戲玩法"];

  const Content = [
    "艾咪是個憂鬱症患者，在學校常常受到同學們異樣的眼光，本來喜歡戶外活動的他，忽然開始喜歡手工藝。後來也因為病情加重，他常將自己封鎖在房間一待就是一整天，在這期間，她縫製了一個娃娃取名叫安森。安森是她唯一的朋友，艾咪常常與安森訴說他的痛苦。但安森並不完整，因為艾咪沒有幫它縫上「心」。忽然有天安森被神奇的月光照到醒了過來，有了意識的安森覺得正是因為艾咪沒有給他縫上心所以才沒辦法體會她的感受。於是穿越了安森決定要拼湊完整的心，代替艾咪戰勝心魔。而主角艾咪有寫日記的習慣",
    "每完成一道關卡，即可獲得一個日記碎片，回到主畫面後將會看見隱藏的日記碎片，需集滿七個日記碎片才能觸發結局二。若在遊玩過程中無法達成破關的指定條件，即觸發結局一。",
    "主要收集日記碎片，共有七個，每個關卡前會先收集一片，破關會再有得到一片。碎片故事如下:2010.03.01爸爸帶我去看了醫生，醫生說我患了憂鬱症，和我說了很多話，要按時吃藥，叫我別想太多。 我把這件事告訴了我最最最要好的朋友拉拉，拉拉也叫我別想太多。2010.03.05班上的同學不知道為什麼開始用異樣的眼光看我，算了可能是我多想了! 今天爸爸又喝酒了，自從和媽媽離婚後就常常這樣，我最討厭他每次醉了說如果當初沒有生 下我就好了，這樣媽媽也不會壓力太大離開他。2010.04.25桌子被弄亂了，大家也不和我說話了，雖然還是有人用一副同情的眼神看著我，可我一點也不 需要同情，我哪裡怪了...還是我真的是異類?現在只覺得每天都過得好累。2010.09.12醫生建議爸爸讓我不要去學校了，待在家休息，我發現醫生開的藥量增加了，這些成分似乎 有安眠的效果，每次吃完都好想睡。2010.10.24我翻到衣櫃裡有一根裁縫針和一些布料，興許是在房間待悶了，想做一個娃娃陪自己，名字都 想好了，它叫安森。小時候媽媽在給我唸童話書的時候有個英雄名字也叫安森，媽媽說要是感 到孤單害怕的時候，也許安森就會來救妳了..2010.11.09好想死好想死好想死好想死好想死好想好想死好想死好想死好想死好想好想死。 2010.11.13安森再見",
    "遊戲關卡共三關，每關任務皆有不同的指定目標，玩家目標是盡可能成功闖關，拼湊出完整的故事內容，全部解鎖後則會觸發結局二，反之失敗則觸發結局一。",
    "上下左右控制移動，滑鼠左鍵與背包、日記互動",
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
