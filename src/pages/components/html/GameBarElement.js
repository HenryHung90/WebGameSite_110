import Button from "@mui/material/Button";
import $ from "jquery";

const GameBarElement = () => {
  return (
    <>
      <Button variant="text" disabled style={{ color: "#949494" }}>
        導覽列
      </Button>
      <div className="GameBar">
        <Button
          variant="text"
          onClick={() => {
            $("html, body").animate(
              {
                scrollTop: $("#GameIntro").offset().top - 100,
              },
              { duration: 500, easing: "swing" }
            );
          }}
          style={{ color: "white", fontSize: "20px" }}
        >
          遊戲介紹
        </Button>
        <Button
          variant="text"
          onClick={() => {
            $("html, body").animate(
              {
                scrollTop: $("#GameContent").offset().top - 100,
              },
              { duration: 700, easing: "swing" }
            );
          }}
          style={{ color: "white", fontSize: "20px" }}
        >
          遊戲說明
        </Button>
        <Button
          variant="text"
          onClick={() => {
            $("html, body").animate(
              {
                scrollTop: $("#GameStructure").offset().top - 100,
              },
              { duration: 900, easing: "swing" }
            );
          }}
          style={{ color: "white", fontSize: "20px" }}
        >
          遊戲架構
        </Button>
        <Button
          variant="text"
          onClick={() => {
            $("html, body").animate(
              {
                scrollTop: $("#GameScene").offset().top - 100,
              },
              { duration: 1100, easing: "swing" }
            );
          }}
          style={{ color: "white", fontSize: "20px" }}
        >
          場景設計
        </Button>
        <Button
          variant="text"
          onClick={() => {
            $("html, body").animate(
              {
                scrollTop: $("#GameDesign").offset().top - 100,
              },
              { duration: 1300, easing: "swing" }
            );
          }}
          style={{ color: "white", fontSize: "20px" }}
        >
          美術設計
        </Button>
        <Button
          variant="text"
          onClick={() => {
            $("html, body").animate(
              {
                scrollTop: $("#TimingGantt").offset().top - 100,
              },
              { duration: 1500, easing: "swing" }
            );
          }}
          style={{ color: "white", fontSize: "20px" }}
        >
          時間規劃
        </Button>
        <Button
          variant="text"
          onClick={() => {
            $("html, body").animate(
              {
                scrollTop: $("#GroupDivision").offset().top - 100,
              },
              { duration: 1700, easing: "swing" }
            );
          }}
          style={{ color: "white", fontSize: "20px" }}
        >
          小組分工
        </Button>
      </div>
    </>
  );
};

export default GameBarElement;
