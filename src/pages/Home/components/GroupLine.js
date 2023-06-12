import GroupCard from "./GroupCard";

const GroupLine = ({ Group }) => {
  return (
    <div>
      <div className="GroupLine" id="Line_1">
        <GroupCard Group={Group[0]} />
        <GroupCard Group={Group[1]} />
        <GroupCard Group={Group[2]} />
      </div>
      <div className="GroupLine" id="Line_2">
        <GroupCard Group={Group[3]} />
        <GroupCard Group={Group[4]} />
        <GroupCard Group={Group[5]} />
      </div>
      <div className="GroupLine" id="Line_3">
        <GroupCard Group={Group[6]} />
        <GroupCard Group={Group[7]} />
        <GroupCard Group={Group[8]} />
      </div>
      <div className="GroupLine" id="Line_4">
        <GroupCard Group={Group[9]} />
        <GroupCard Group={Group[10]} />
      </div>
    </div>
  );
};

export default GroupLine;
