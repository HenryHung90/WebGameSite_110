const GameIntroElement = ({ Box, Header, Content }) => {
  return (
    <>
      <div className="GameIntroTitle">
        <h3 className="GameIntroTitle_Text" id={`Game${Box}_Title`}>
          {Header}
        </h3>
      </div>
      <div className="GameIntroSubtitle">
        <p className="GameIntroSubtitle_Text">{Content}</p>
      </div>
    </>
  );
};

export default GameIntroElement;
