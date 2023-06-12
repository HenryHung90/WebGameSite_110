import { useState, useEffect } from "react";
import $ from "jquery";

import HomeMenu from "../components/html/HomeMenu";
import {
  getDatabase,
  ref,
  set,
  get,
  push,
  remove,
  child,
} from "firebase/database";
import "./index.css";

import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Scoring = ({ User }) => {
  const db = getDatabase();

  const [First, setFirst] = useState("");
  const [Second, setSecond] = useState("");
  const [Third, setThird] = useState("");

  const Group = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
  ];

  function FirstStageChange(e) {
    setFirst(e.target.value);
  }
  function SecondStageChange(e) {
    setSecond(e.target.value);
  }
  function ThirdStageChange(e) {
    setThird(e.target.value);
  }

  //投票系統
  function Voting() {
    const dbRef = ref(db);
    const VoteTime = new Date().toString();
    const newKey = push(child(ref(db), "Score")).key;
    for (let i = 1; i <= 11; i++) {
      let compare = `0${i}`;
      if (i >= 10) {
        compare = `${i}`;
      }
      let NowCount = 0;

      get(child(dbRef, `${process.env.REACT_APP_FIREBASE_VOTECOUNT}${compare}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            NowCount = snapshot.val().GroupCount;
          } else {
            console.log("沒有資料");
          }
        })
        .then((response) => {
          if (First === compare) {
            set(
              ref(
                db,
                `${process.env.REACT_APP_FIREBASE_SCOREGROUP}${compare}/${newKey}`
              ),
              {
                Name: User.UserName,
                Email: User.UserEmail,
                Time: VoteTime,
                Vote: 3,
              }
            );
            set(
              ref(db, `${process.env.REACT_APP_FIREBASE_VOTECOUNT}${compare}`),
              {
                GroupCount: (NowCount += 3),
              }
            );
          }
          if (Second === compare) {
            set(
              ref(
                db,
                `${process.env.REACT_APP_FIREBASE_SCOREGROUP}${compare}/${newKey}`
              ),
              {
                Name: User.UserName,
                Email: User.UserEmail,
                Time: VoteTime,
                Vote: 2,
              }
            );
            set(
              ref(db, `${process.env.REACT_APP_FIREBASE_VOTECOUNT}${compare}`),
              {
                GroupCount: (NowCount += 2),
              }
            );
          }
          if (Third === compare) {
            set(
              ref(
                db,
                `${process.env.REACT_APP_FIREBASE_SCOREGROUP}${compare}/${newKey}`
              ),
              {
                Name: User.UserName,
                Email: User.UserEmail,
                Time: VoteTime,
                Vote: 1,
              }
            );
            set(
              ref(db, `${process.env.REACT_APP_FIREBASE_VOTECOUNT}${compare}`),
              {
                GroupCount: (NowCount += 1),
              }
            );
          }
        })
        .then((res) => {
          set(ref(db, `${process.env.REACT_APP_FIREBASE_CHECKVOTE}${newKey}`), {
            Email: User.UserEmail,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  //驗票系統
  async function CheckVote() {
    const dbRef = ref(db);
    let IsVoteEmail;
    let flag = false;
    await get(child(dbRef, process.env.REACT_APP_FIREBASE_CHECKVOTE)).then(
      (snapshot) => {
        if (snapshot.exists()) {
          IsVoteEmail = snapshot.val();
        } else {
          console.log("沒有任何人投票");
        }
        let VoteAry = Object.keys(IsVoteEmail).map((key) => {
          return { ["Vote"]: IsVoteEmail[key] };
        });
        IsVoteEmail = [];
        for (let i = 0; i < VoteAry.length - 1; i++) {
          IsVoteEmail[i] = VoteAry[i].Vote.Email;
          if (User.UserEmail === VoteAry[i].Vote.Email) {
            window.alert("你已經投票過囉！");
            flag = true;
            break;
          }
        }
      }
    );
    return flag;
  }

  const SubmitVote = () => {
    if (User.UserEmail === "guest") {
      window.alert("訪客身份禁止投票！");
      return;
    }
    if (First === Second || First === Third || Second === Third) {
      window.alert("請勿重複投相同組別！");
      return;
    }
    CheckVote().then((res) => {
      if (!res) {
        Voting();
        window.alert("投票完成！");
      }
    });
  };
  const DeleteVote = () => {
    Group.map((val) => {
      remove(ref(db, `${process.env.REACT_APP_FIREBASE_SCOREGROUP}${val}`));
      remove(ref(db, `${process.env.REACT_APP_FIREBASE_VOTECOUNT}${val}`));
      remove(ref(db, process.env.REACT_APP_FIREBASE_CHECKVOTE));
    });
  };
  const CreatVote = () => {
    set(ref(db, process.env.REACT_APP_FIREBASE_CHECKVOTE), { _id: "test" });
    Group.map((val) => {
      const newKey = push(
        child(ref(db), `${process.env.REACT_APP_FIREBASE_SCOREGROUP}${val}`)
      ).key;
      set(ref(db, `${process.env.REACT_APP_FIREBASE_SCOREGROUP}${val}/`), {
        _id: newKey,
      });
      set(ref(db, `${process.env.REACT_APP_FIREBASE_VOTECOUNT}${val}/`), {
        GroupCount: 0,
      });
    });
  };

  $(window).ready(function () {
    $(".ScoringTitle").animate({ opacity: 1 }, 700);
    $(".ScoringSubtitle").animate({ opacity: 1 }, 700);
    setTimeout(() => {
      $(".ScoringTitle").animate({ fontSize: "50px" }, 700);
      $(".ScoringSubtitle").animate({ fontSize: "20px" }, 700);
      $(".ScoringTableBox").fadeIn(1000);
    }, 1500);
  });

  return (
    <>
      <div id="HomeMenu">
        <HomeMenu User={User} />
      </div>
      <div className="ScoringContainer">
        <div className="ScoringTitleBox">
          <h1 className="ScoringTitle">投票</h1>
          <h3 className="ScoringSubtitle">選出最愛的前三名組別！</h3>
        </div>
        <div className="ScoringTableBox">
          <table className="ScoringTable">
            <thead>
              <tr>
                <th className="ScoringTable_th">心中排名</th>
                <th className="ScoringTable_th">組別</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ScoringTable_td">第一名</td>
                <td className="ScoringTable_td">
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-simple-select-filled-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="FirstStage"
                      value={First}
                      onChange={FirstStageChange}
                    >
                      {Group.map((value, index) => {
                        return (
                          <MenuItem value={value} key={index}>
                            Group.{value}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </td>
              </tr>
              <tr>
                <td className="ScoringTable_td">第二名</td>
                <td className="ScoringTable_td">
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-simple-select-filled-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="SecondStage"
                      value={Second}
                      onChange={SecondStageChange}
                    >
                      {Group.map((value, index) => {
                        return (
                          <MenuItem value={value} key={index}>
                            Group.{value}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </td>
              </tr>
              <tr>
                <td className="ScoringTable_td">第三名</td>
                <td className="ScoringTable_td">
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-simple-select-filled-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="ThirdStage"
                      value={Third}
                      onChange={ThirdStageChange}
                    >
                      {Group.map((value, index) => {
                        return (
                          <MenuItem value={value} key={index}>
                            Group.{value}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="VoteButton">
            <Button
              id="submitButton"
              onClick={SubmitVote}
              variant="contained"
              startIcon={<HowToVoteIcon />}
              style={{ fontFamily: "pixel font", fontSize: "20px" }}
            >
              Vote
            </Button>
            <Button
            id="submitButton"
            onClick={DeleteVote}
            variant="contained"
            startIcon={<HowToVoteIcon />}
            style={{ fontFamily: "pixel font", fontSize: "20px" }}
          >
            reset Vote
          </Button>
          <Button
            id="submitButton"
            onClick={CreatVote}
            variant="contained"
            startIcon={<HowToVoteIcon />}
            style={{ fontFamily: "pixel font", fontSize: "20px" }}
          >
            Create env
          </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scoring;
