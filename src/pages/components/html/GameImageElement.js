const GameImageElement = ({ Box, Header, Content }) => {
  return (
    <>
      <div className="GameIntroTitle">
        <h3 className="GameIntroTitle_Text" id={`Game${Box}_Title`}>
          {Header}
        </h3>
      </div>
      <div className="GameIntroSubtitle" id="SubImage">
        {Content.map((val) => {
          return (
            <img className="GameIntroSubtitle_Image" src={val} alt={Header} />
          );
        })}
      </div>
    </>
  );
};

export default GameImageElement;
