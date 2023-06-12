import { useState, useEffect} from "react";

import HomeMenu from "../components/html/HomeMenu";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./index.css";

import { getDatabase, ref, onValue } from "firebase/database";
import $ from "jquery";

const Champ = ({ User }) => {
  //投票人總數
  const [GlobalVote, setGlobalVote] = useState("");
  //投票組計數
  const [GroupVote, setGroupVote] = useState([
    {
      "Group": "G1",
      "Score": 0
    },
    {
      "Group": "G2",
      "Score": 0
    },
    {
      "Group": "G3",
      "Score": 0
    },
    {
      "Group": "G4",
      "Score": 0
    },
    {
      "Group": "G5",
      "Score": 0
    },
    {
      "Group": "G6",
      "Score": 0
    },
    {
      "Group": "G7",
      "Score": 0
    },
    {
      "Group": "G8",
      "Score": 0
    },
    {
      "Group": "G9",
      "Score": 0
    },
    {
      "Group": "G10",
      "Score": 0
    },
    {
      "Group": "G11",
      "Score": 0
    }
  ]);

  const db = getDatabase();
  const dbRef = ref(
    db,
    process.env.REACT_APP_FIREBASE_REACT_APP_FIREBASE_SCORE
  );
  function CheckVotingNum() {
    //投票人數
    let _Global = [];
    //投票計數
    let _Group = [];
    let GroupWithNumber = [];

    onValue(dbRef, (snapshot) => {
      let dbTemp = snapshot.val();

      let GlobalTemp = Object.keys(dbTemp.IsVote).map((key) => {
        return { ["Global"]: dbTemp.IsVote[key] };
      });
      let GroupTemp = Object.keys(dbTemp.VoteCount).map((key) => {
        return { ["Group"]: dbTemp.VoteCount[key] };
      });

      for (let i = 0; i < GlobalTemp.length - 1; i++) {
        _Global[i] = GlobalTemp[i].Global.Email;
      }
      for (let i = 0; i < GroupTemp.length; i++) {
        _Group[i] = GroupTemp[i].Group.GroupCount;
      }

      for (let i = 0; i < _Group.length; i++) {
        GroupWithNumber.push({ Group: `G${i + 1}`, Score: _Group[i] });
      }
      GroupWithNumber.sort((a, b) => {
        return b.Score - a.Score;
      });


      //先設定投票人數
      setGlobalVote(_Global.length);
      setGroupVote([...GroupWithNumber]);

      _Global = [];
      _Group = [];
      GroupWithNumber = [];
    });
  }
  useEffect(() => {
    CheckVotingNum()
  }, [])

  $(window).ready(function () {
    $(".ChampTitle").fadeIn(1000);
    $(".IsVoteDataTitle").fadeIn(1000);
    setTimeout(() => {
      $("#Chart").slideDown(500);
      $("#Champaign").slideDown(500);
      $("#bar").fadeIn(500);
    }, 1000);
  });

  if (User.UserEmail !== "guest") {
    return (
      <>
        <div id="HomeMenu">
          <HomeMenu User={User} />
        </div>
        <div className="ChampContainer">
          <div className="ChampTitleBox">
            <h1 className="ChampTitle">LeaderBoard</h1>
            <h3 className="IsVoteDataTitle">目前投票:{GlobalVote}人</h3>
          </div>
          <div className="ChampDataBox">
            <div id="Chart">
              <table className="ChampLeaderBoard">
                <thead>
                  <tr>
                    <th className="LeaderBoard_th">組別</th>
                    <th className="LeaderBoard_th">當前分數</th>
                  </tr>
                </thead>
                <tbody>
                  {GroupVote.map((val, key) => {
                    if (key >= 3) {
                      return (
                        <tr>
                          <td className="LeaderBoard_td">{val.Group}</td>
                          <td className="LeaderBoard_td">***</td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr>
                          <td className="LeaderBoard_td">{val.Group}</td>
                          <td className="LeaderBoard_td">{val.Score}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
            <div id="Champaign">
              <div id="ChampaignText">
                <h3 id="LeaderBoard_1">
                  第一名 {GroupVote[0].Group}
                </h3>
              </div>
              <div id="ChampaignText">
                <h3 id="LeaderBoard_2">
                  第二名 {GroupVote[1].Group}
                </h3>
              </div>
              <div id="ChampaignText">
                <h3 id="LeaderBoard_3">
                  第三名 {GroupVote[2].Group}
                </h3>
              </div>
            </div>
            <div id="bar">
              <ResponsiveContainer width="100%" aspect={1}>
                <BarChart
                  width={500}
                  height={300}
                  data={GroupVote}
                >
                  <XAxis dataKey="Group" />
                  <Bar dataKey="Score" fill="brown" />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="HomeMenu">
          <HomeMenu User={User} />
        </div>
        <div className="ChampContainer">
          <div className="ChampTitleBox">
            <h1 className="ChampTitle">LeaderBoard</h1>
            <h3 className="IsVoteDataTitle">訪客無法看排行！</h3>
          </div>
        </div>
      </>
    );
  }
};

export default Champ;
