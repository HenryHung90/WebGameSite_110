import $ from "jquery";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import GroupText from "./GroupText";

const GroupCard = ({ Group }) => {
  const IsMouseOver = useRef(false);
  const GroupPage = useNavigate();

  function MouseOverCard(e) {
    e.stopPropagation();
    if (IsMouseOver.current === true) {
      return;
    }
    IsMouseOver.current = true;
    $(`#GroupCard_Text_${Group}`).slideDown(500);
    setTimeout(() => {
      IsMouseOver.current = false;
    }, 600);
  }

  function MouseOutCard(e) {
    e.stopPropagation();
    $(`#GroupCard_Text_${Group}`).slideUp(500);
  }

  function MouseClickCard(e) {
    GroupPage(`/G${Group}`);
  }
  return (
    <div className="Group">
      <div
        className="GroupMouse"
        onClick={MouseClickCard}
        onMouseOver={MouseOverCard}
        onMouseOut={MouseOutCard}
      ></div>
      <div className="GroupCard" id={`GroupCard_${Group}`}></div>
      <GroupText Group={Group} />
    </div>
  );
};

export default GroupCard;
